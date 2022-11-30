from flask.views import MethodView
from flask_smorest import Blueprint
from schemas import UserSchema

blp = Blueprint("Users", __name__, description = "Operations on user")

@blp.route("/user")
class UserForm(MethodView):
    @blp.arguments(UserSchema)
    def post(self):
        pass

