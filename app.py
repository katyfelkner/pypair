#!/usr/bin/env python
from flask import Flask

app = Flask(__name__)


@app.route('/test', methods=('GET', 'POST'))
def test():
    return "Content-Type: text/html\n\n" + 'python3: running!'

if __name__ == "__main__":
    app.run(debug = True)