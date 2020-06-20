from flask import Blueprint

# Definisikan modul Blueprint
api = Blueprint('api', __name__, url_prefix='/api')

# Load komponen modul
from .index import *
