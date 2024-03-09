#!usr/bin/python3
"""
script to start a flask web application
"""

from models import storage
from flask import Flask, render_template
import uuid

app = Flask(__name__)
app.debug = True


@app.teardown_appcontext
def teardown(Exception):
    """
    remove the current SQLAlchemy Session
    """
    storage.close()


@app.route("/landingP", strict_slashes=False, methods=["GET", "POST"])
def last():
    """
    Landing page
    """
    return render_template(
        "landingP.html",
        #users=storage.all(User),
        cache_id=uuid.uuid4()
    )


if __name__ == "__main__":
    app.run()
