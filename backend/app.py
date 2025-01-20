from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for frontend-backend communication

@app.route("/")
def home():
    return "Backend is running!", 200

if __name__ == "__main__":
    app.run(debug=True)

