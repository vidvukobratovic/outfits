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

# Routes go here (e.g., /api/upload)
@app.route("/api/upload", methods=["POST"])
def upload_image():
    if 'file' not in request.files:
        print("Error: No file part in request")
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        print("Error: No selected file")
        return jsonify({"error": "No selected file"}), 400
    
    try:
        print(f"Uploading file: {file.filename}")  # Debugging line
        
        # Upload the image to Cloudinary
        upload_result = cloudinary.uploader.upload(file)
        print("Cloudinary Upload Result:", upload_result)  # Debugging line

        # Get the URL of the uploaded image
        image_url = upload_result["url"]
        
        # Store the image URL and other details in the database
        new_garment = Garment(
            category="top",  # Example category, modify as needed
            name="Example Garment",
            image_url=image_url
        )
        db.session.add(new_garment)
        db.session.commit()
        print(f"Successfully saved {file.filename} to database.")  # Debugging line

        return jsonify({"message": "File uploaded successfully", "image_url": image_url}), 200
    except Exception as e:
        print("Upload Error:", str(e))  # Print error to console
        return jsonify({"error": str(e)}), 500

@app.route("/api/test", methods=["GET"])
def test_route():
    return jsonify({"message": "API is working"}), 200

# If running this file directly
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)

