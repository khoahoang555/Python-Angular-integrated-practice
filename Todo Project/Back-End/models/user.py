from db import db

class UserModel(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(80), unique = True, nullable = False)
    password = db.Column(db.String(256), nullable = False)
    age = db.Column(db.Integer, nullable = False)
    gender = db.Column(db.Boolean, nullable = False)
    fullName = db.Column(db.String(80), nullable = False)