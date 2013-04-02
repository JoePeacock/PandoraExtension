import json
import os
import sqlalchemy
from flask import Flask, g, request

app = Flask(__name__)
app.debug= True
app.config['TRAP_BAD_REQUEST_ERRORS'] = True

@app.route('/<title>', methods=['GET'])
def hello(title):
	station = request.args['station']
	print station
	return "schweet"

if __name__ == '__main__':
	port = int(os.environ.get('PORT', 5555))
	app.run(host='0.0.0.0', port=port, debug=True)