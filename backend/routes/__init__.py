from flask import Flask
from config import ApplicationConfig
from models import db
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_session import Session

def create_app():
    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)

    db.init_app(app)
    Bcrypt(app)
    Session(app)
    CORS(app, supports_credentials=True)

    with app.app_context():
        db.create_all()

    # Register blueprints (to be created)
    from .auth import auth_bp
    from .questions import questions_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(questions_bp)

    return app 