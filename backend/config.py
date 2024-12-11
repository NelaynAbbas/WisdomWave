import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    # MongoDB connection string
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb+srv://nelaynabbas5:SlmYetvcBuXJVxDN@user.9mehf.mongodb.net/?retryWrites=true&w=majority&appName=user')
    
    # Secret key for Flask sessions (generate a strong, random key for production)
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key-here')
    
    # Flask debug mode (set to False in production)
    DEBUG = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    
    # Other configuration variables can be added here
    # For example:
    # MAIL_SERVER = os.getenv('MAIL_SERVER')
    # MAIL_PORT = int(os.getenv('MAIL_PORT', 587))
    # MAIL_USE_TLS = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
    # MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    # MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
 
 #nelaynabbas5
 #SlmYetvcBuXJVxDN