from flask import Flask, request, abort, jsonify, session
from flask_bcrypt import Bcrypt
from models import db, User
from config import ApplicationConfig
from flask_session import Session

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

db.init_app(app)
bcrypt = Bcrypt(app)
server_session = Session(app)

with app.app_context():
    db.create_all()

@app.route('/signup', methods=['POST'])
def signup():
    username = request.json["username"]
    password = request.json["password"]

    user_exists = User.query.filter_by(username=username).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(username=username, password=hashed_password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "username": new_user.username 
    })

@app.route('/signin', methods=['POST'])
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