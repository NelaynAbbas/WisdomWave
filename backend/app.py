from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from config import Config
from models.user import User

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient(Config.MONGO_URI)
db = client.wisdomwave  # Your database name
user_model = User(db)

@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'username', 'email', 'password']
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400

        # Create new user
        success, message = user_model.create_user(
            name=data['name'],
            username=data['username'],
            email=data['email'],
            password=data['password']
        )

        if success:
            return jsonify({"message": "User created successfully", "userId": message}), 201
        else:
            return jsonify({"error": message}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not all(k in data for k in ['email', 'password']):
            return jsonify({"error": "Missing email or password"}), 400

        success, user = user_model.validate_user(data['email'], data['password'])
        
        if success:
            return jsonify({
                "message": "Login successful",
                "user": {
                    "name": user['name'],
                    "email": user['email'],
                    "username": user['username']
                }
            }), 200
        else:
            return jsonify({"error": "Invalid credentials"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

