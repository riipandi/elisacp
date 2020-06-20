from flask import render_template
from . import site

@site.route('/', methods=['GET'])
def index():
    """Render template Jinja."""
    return render_template('welcome.html')
