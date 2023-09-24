from flask import Flask
from flask_cors import CORS

UPLOAD_FOLDER = "./backend/uploads"

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app, supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'


from get import *
from post import *


if __name__ == '__main__':
    app.run(port=5000, debug=True)
