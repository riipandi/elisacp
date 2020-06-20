import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from pathlib import Path

# Globally accessible libraries
db = SQLAlchemy()

# Path constants
BASE_PATH = Path('.').resolve()
TEMPLATE_PATH = os.path.join(BASE_PATH, 'templates/')
STATIC_PATH = os.path.join(BASE_PATH, 'static/')

def create_app():
    """Initialize the core application."""
    app = Flask(__name__, instance_relative_config = False, static_folder = STATIC_PATH, template_folder = TEMPLATE_PATH)
    app.config.from_object('config.application')

    # Initialize Plugins
    db.init_app(app)

    with app.app_context():
        # Import Blueprint modules
        from .api import api
        from .site import site

        # Register Blueprints
        app.register_blueprint(api)
        app.register_blueprint(site)

        return app
