from flask import render_template
from . import site

@site.route('/login', methods=['GET'])
def login_index():
    return render_template('auth/login.html')

@site.route('/login', methods=['POST'])
def login_process():
    return 'Process login'

@site.route('/resetpass', methods=['GET'])
def resetpass_index():
    return render_template('auth/resetpass.html')
