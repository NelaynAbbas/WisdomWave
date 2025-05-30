<<<<<<< HEAD
from routes import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
=======
from flask import Flask, request, abort, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db, User
from config import ApplicationConfig
from flask_session import Session
#comme

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

db.init_app(app)
bcrypt = Bcrypt(app)
server_session = Session(app)
CORS(app, supports_credentials=True)

with app.app_context():
    db.create_all()

@app.route('/@me')
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

@app.route('/signup', methods=['POST'])
def signup():
    username = request.json["username"]
    password = request.json["password"]
    name = request.json["name"]
    email = request.json["email"]

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

@app.route('/logout', methods = ['POST'])
def logout_user():
    session.pop("user_id")
    return "200"

@app.route('/signin', methods = ['POST'])
def login():
    username = request.json["username"]
    password = request.json["password"]

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "username": user.username 
    })
    

if __name__ == '__main__':
    app.run(debug=True)
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
