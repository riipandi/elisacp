from flask import render_template
from . import site

@site.route('/', methods=['GET'])
def index():
    return render_template('dashboard.html')
