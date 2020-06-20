# Gunicorn configuration file

import os
from dotenv import load_dotenv
from pathlib import Path
import multiprocessing

BASE_DIR = Path('.').resolve()
ENV_PATH = BASE_DIR.joinpath('.env')

load_dotenv(dotenv_path=ENV_PATH)

bind = os.getenv('APP_HOST') + ":" + os.getenv('APP_PORT')

backlog = 2048
loglevel = 'info'

# Store log to file in production mode
# if os.getenv('APP_ENV') == 'production':
#     errorlog = os.path.join(BASE_DIR, 'storage/logs/error.log')
#     accesslog = os.path.join(BASE_DIR, 'storage/logs/access.log')

# Set dynamic or static workers based on CPU
if os.getenv('APP_DEBUG') == False:
    workers = multiprocessing.cpu_count() * 2 + 1
else:
    workers = 1

worker_class = 'sync'
worker_connections = 1000
timeout = 30
keepalive = 2

daemon = False
capture_output = True

reload = os.getenv('APP_DEBUG')
