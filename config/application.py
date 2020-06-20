# Flask configuration file
import os
from dotenv import load_dotenv
from pathlib import Path

BASE_PATH = Path('.').resolve()
ENV_PATH = os.path.join(BASE_PATH, '.env')
load_dotenv(dotenv_path=ENV_PATH)

DB_TYPE = os.getenv('DB_TYPE')
DB_PORT = os.getenv('DB_PORT')
DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_DATABASE')
DB_USER = os.getenv('DB_USERNAME')
DB_PASS = os.getenv('DB_PASSWORD')

# --------------------------------------------------------------------------------
# Flask configuration begin here!
# --------------------------------------------------------------------------------

DEBUG = os.getenv('APP_DEBUG')

if os.getenv('APP_ENV') == 'production':
    DEVELOPMENT = False
else:
    DEVELOPMENT = True

SECRET_KEY = os.getenv('APP_KEY')
FLASK_SECRET = os.getenv('APP_KEY')

# SQLAlchemy connection parameter
if DB_TYPE == 'sqlite':
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_PATH, 'storage/test.db')
else:
    SQLALCHEMY_DATABASE_URI = DB_TYPE + '://' + DB_USER + ':' + DB_PASS + '@' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME

SQLALCHEMY_ECHO = False
SQLALCHEMY_TRACK_MODIFICATIONS = False
