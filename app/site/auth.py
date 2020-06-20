from . import site

@site.route('/login', methods=['GET'])
def login_index():
    return 'Halaman login'

@site.route('/login', methods=['POST'])
def login_process():
    return 'Process login'

@site.route('/resetpass', methods=['GET'])
def resetpass_index():
    return 'Halaman reset password'
