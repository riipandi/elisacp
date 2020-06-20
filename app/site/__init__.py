import os
from flask import Blueprint, render_template

# Definisikan modul Blueprint
site = Blueprint('site', __name__)

# Load komponen modul
from .home import *
from .auth import *

# Error page handler
@site.errorhandler(404)
def error_404(error):
    """404 error handling."""
    return render_template('errors/404.html', error = error)
