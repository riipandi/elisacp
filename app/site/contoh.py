from . import site

@site.route('/hello', methods=['GET'])
def hello():
    return '<h1>Hello from another page!</h1>'

@site.route('/sample', methods=['GET'])
def sample():
    return 'Contoh halaman lain'
