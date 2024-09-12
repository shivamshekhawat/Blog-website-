# importing essential python libraries
from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# creating an instance for sqlAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    
    # essential configuration for SQLite Database

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blogs.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Now initializing the database with the app
    
    db.init_app(app)

    return app
