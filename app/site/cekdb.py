from .. import db
from . import site

@site.route('/testdb', methods=['GET'])
def testdb():
    output = 'koneksi database ok'

    try:
        # to check database we will execute raw query
        db_session = db.get_engine()
        db_session.execute('SELECT 1')
    except Exception as e:
        output = str(e)

    return output
