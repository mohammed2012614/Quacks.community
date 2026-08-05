from flask import Flask, render_template, request, redirect, session
import sqlite3

app = Flask(__name__)
app.secret_key = "quacks_secret_key"


def create_database():
    conn = sqlite3.connect("database.db")
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        username TEXT,
        password TEXT,
        rank TEXT
    )
    """)

    conn.commit()
    conn.close()


@app.route("/")
def home():
    if "username" in session:
        return render_template("home.html", username=session["username"])

    return redirect("/login")


@app.route("/login", methods=["GET","POST"])
def login():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        conn = sqlite3.connect("database.db")
        cur = conn.cursor()

        cur.execute(
            "SELECT * FROM users WHERE username=? AND password=?",
            (username,password)
        )

        user = cur.fetchone()

        conn.close()


        if user:
            session["username"] = username
            return redirect("/")

        else:
            return "Login Failed"


    return render_template("login.html")



create_database()

app.run(debug=True)
