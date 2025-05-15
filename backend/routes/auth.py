from flask import Blueprint, request, jsonify, session
from models import db, User
from flask_bcrypt import Bcrypt

auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()

@auth_bp.route('/@me')
def get_current_user():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "email": user.email
    })

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data["username"]
    password = data["password"]
    name = data["name"]
    email = data["email"]

    user_exists = User.query.filter_by(username=username).first() is not None
    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(username=username, password=hashed_password, name=name, email=email)
    db.session.add(new_user)
    db.session.commit()
    session["user_id"] = new_user.id
    return jsonify({
        "id": new_user.id,
        "username": new_user.username
    })

@auth_bp.route('/logout', methods=['POST'])
def logout_user():
    session.pop("user_id", None)
    return "200"

@auth_bp.route('/signin', methods=['POST'])
def login():
    data = request.json
    username = data["username"]
    password = data["password"]
    user = User.query.filter_by(username=username).first()
    if user is None or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    session["user_id"] = user.id
    return jsonify({
        "id": user.id,
        "username": user.username
    }) 