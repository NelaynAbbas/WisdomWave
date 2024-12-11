from datetime import datetime
from bson import ObjectId
import bcrypt

class User:
    def __init__(self, db):
        self.collection = db.user

    def create_user(self, name, username, email, password):
        # Check if user already exists
        if self.collection.find_one({"$or": [{"email": email}, {"username": username}]}):
            return False, "Email or username already exists"

        # Hash the password
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

        # Create user document
        user = {
            "name": name,
            "username": username,
            "email": email,
            "password": hashed_password,
            "created_at": datetime.utcnow()
        }

        # Insert the user
        result = self.collection.insert_one(user)
        return True, str(result.inserted_id)

    def validate_user(self, email, password):
        user = self.collection.find_one({"email": email})
        if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
            return True, user
        return False, None