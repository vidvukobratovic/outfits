from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for frontend-backend communication

# Sample in-memory data store
user_outfits = {"tops": [], "pants": [], "shoes": []}

@app.route("/add-item", methods=["POST"])
def add_item():
    """Endpoint to add a clothing item."""
    data = request.json
    item_type = data.get("type")
    item_name = data.get("name")

    if item_type in user_outfits:
        user_outfits[item_type].append(item_name)
        return jsonify({"message": f"{item_name} added to {item_type}."}), 201
    return jsonify({"error": "Invalid item type."}), 400

@app.route("/get-items", methods=["GET"])
def get_items():
    """Endpoint to fetch all clothing items."""
    return jsonify(user_outfits), 200

@app.route("/")
def home():
    return "Backend is running!", 200

if __name__ == "__main__":
    app.run(debug=True)

