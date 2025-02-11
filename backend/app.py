import random
from flask import Flask, request, jsonify
from config import cloudinary
import cloudinary.uploader
import cloudinary.api
from models import db, Garment
from flask_cors import CORS
import os


# Create the Flask app
app = Flask(__name__)
db_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'instance', 'app.db')

# Configure the app
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{db_path}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

# Initialize the database
db.init_app(app)

@app.route("/api/upload", methods=["POST"])
def upload_image():
    if 'file' not in request.files:
        print("Error: No file part in request")
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    category = request.form.get('category')  # Fix: Get category from frontend

    if not category:
        print("Error: No category provided")
        return jsonify({"error": "No category provided"}), 400
    
    if file.filename == '':
        print("Error: No selected file")
        return jsonify({"error": "No selected file"}), 400

    try:
        print(f"Uploading file: {file.filename} with category {category}")

        # Upload the image to Cloudinary
        upload_result = cloudinary.uploader.upload(file)
        print("Cloudinary Upload Result:", upload_result)

        # Get the URL of the uploaded image
        image_url = upload_result["secure_url"]

        # Store the image URL and other details in the database
        new_garment = Garment(
            category=category,  
            name="Example Garment",
            image_url=image_url
        )
        db.session.add(new_garment)
        db.session.commit()

        print(f"Successfully saved {file.filename} to database as {category}.")

        return jsonify({"message": "File uploaded successfully", "image_url": image_url}), 200

    except Exception as e:
        print("Upload Error:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route("/api/garments", methods=["GET"])
def get_garments():
    try:
        garments = Garment.query.all()
        garments_data = [
            {"id": g.id, "category": g.category, "name": g.name, "image_url": g.image_url}
            for g in garments
        ]
        return jsonify(garments_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/outfit", methods=["GET"])
def get_outfit():
    try:
        categories = ["top", "bottom", "shoes"]
        outfit = {}

        for category in categories:
            items = Garment.query.filter_by(category=category).all()
            if items:
                outfit[category] = random.choice(items)  # Pick one random item

        outfit_data = {
            cat: {"id": g.id, "category": g.category, "name": g.name, "image_url": g.image_url}
            for cat, g in outfit.items()
        }

        return jsonify(outfit_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500



# If running this file directly
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)

