from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Allow all domains to access the backend API

@app.route("/api/randomize")
def randomize():
    tops = ["Red T-Shirt", "Blue Sweater", "White Blouse", "Green Hoodie"]
    pants = ["Jeans", "Black Trousers", "Shorts", "Cargo Pants"]
    shoes = ["Sneakers", "Boots", "Sandals", "Loafers"]

    # Randomly select one item from each category
    random_top = random.choice(tops)
    random_pants = random.choice(pants)
    random_shoes = random.choice(shoes)

    return jsonify({
        "top": random_top,
        "pants": random_pants,
        "shoes": random_shoes
    })

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
