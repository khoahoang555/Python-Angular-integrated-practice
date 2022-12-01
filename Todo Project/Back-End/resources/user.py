from flask.views import MethodView
from flask_smorest import Blueprint, abort
from schemas import UserSchema
from models import UserModel
from passlib.hash import pbkdf2_sha256
from db import db

blp = Blueprint("Users", __name__, description = "Operations on user")

@blp.route("/user")
class UserForm(MethodView):
    @blp.arguments(UserSchema)
    def post(self, user_data):
        if UserModel.query.filter(UserModel.email == user_data["email"]):
            abort(409, message = "A email with name that already exist")
        
        user = UserModel(
            email = user_data["email"],
            password = user_data["password"],
            age = user_data["age"],
            gender = user_data["gender"],
            fullName = user_data["fullName"]
        )

        try:
            db.session.add(user)
            db.session.commit()
            return {"message": "User created successfully"}, 201
        except:
            abort(500, message = "User created fail")

    def get(self):
        return {"message": "ping"}, 201
        

