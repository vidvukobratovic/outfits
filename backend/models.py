from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Garment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50), nullable=False)  # "top", "bottom", "shoes"
    name = db.Column(db.String(100), nullable=False)  # e.g., "Red T-Shirt"
    image_url = db.Column(db.String(255), nullable=False)  # Cloudinary image URL

