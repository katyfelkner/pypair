from flask import Flask

app = Flask(__name__)


@app.route('/test', methods=('GET', 'POST'))
def test():

    return 'python3: running!'

if __name__ == "__main__":
    app.run(debug = True)