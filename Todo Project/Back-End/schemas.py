from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Str(dump_only=True)
    email = fields.Str(required=True)
    password = fields.Str(required=True)
    age = fields.Integer(required=True)
    fullName = fields.Str(required=True)
    gender = fields.Boolean(required=True)