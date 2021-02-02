from flask import Flask, request, session, redirect, url_for, jsonify
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from passlib.hash import sha256_crypt
from markupsafe import escape
from datetime import timedelta

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config["MONGO_URI"] = "mongodb://localhost:27017/PassageCentre"
mongo = PyMongo(app)

app.secret_key = b'kJDo23KfD8kp'


@app.before_request
def before_request():
    session.permanent = True
    app.permanent_session_lifetime = timedelta(seconds=9999)


@app.route('/')
def home():
    if 'username' in session:
        return "you are logged in"
    else:
        return "you are not logged in"


@app.route('/profile/<username>')
def profile(username):
    if username in session:
        # logged user should never be None
        user = mongo.db.users.find_one({"username": username})
        user["_id"] = ''
        return jsonify({
            "message": "user profile for %s" % escape(session['username']),
            "data": user
        }), 200
    else:
        return jsonify({
            "message": "not logged in",
            "data": None,
        }), 400


@app.route("/login", methods=['POST'])
def login():
    username = request.json['username']
    passwd = request.json['password']
    user = mongo.db.users.find_one({"username": username})
    if user is None:
        return jsonify({
            "message": "user not exists",
            "data": None
        }), 400
    if not sha256_crypt.verify(passwd, user['password']):
        return jsonify({
            "message": "password error",
            "data": None
        }), 400
    session['username'] = request.json['username']
    user["_id"] = ''
    print(user)
    return jsonify({
        "message": "success",
        "data": user
    }), 200


@app.route("/register", methods=['POST'])
def register():
    username = request.json['username']
    passwd = request.json['password']
    email = request.json['email']
    if mongo.db.users.find_one({"username": username}) is not None:
        return jsonify({
            "message": "username exists",
            "data": None
        }), 400
    if mongo.db.users.find_one({"email": email}) is not None:
        return jsonify({
            "message": "email exists",
            "data": None
        }), 400
    mongo.db.users.insert({
        "username": username,
        "password": sha256_crypt.encrypt(passwd),
        "email": email
    })
    return jsonify({
        "message": "success",
        "data": None
    }), 200


@app.route("/set_profile", methods=['POST'])
def set_profile():
    birthday = request.json['birthday']
    gender = request.json['gender']
    user_name = request.json['username']
    if mongo.db.users.find_one({"username": user_name}) is None:
        return jsonify({
            "message": "user not exists",
            "data": None
        }), 400
    to_change = {"username": user_name}
    new_value = {"$set": {"birthday": birthday, "gender": gender}}
    mongo.db.users.update(to_change, new_value)
    return jsonify({
        "message": "success",
        "data": None
    }), 200


@app.route("/upload_file/<user_name>/<file_name>", methods=['POST'])
def upload_file(user_name, file_name):
    # user_name = request.json['request']['username']
    # category_name = request.json['request']['category']
    # item_name = request.json['request']['itemname']
    file_storage = request.files['file']
    # item_name = item.filename
    if mongo.db.users.find_one({"username": user_name}) is None:
        return jsonify({
            "message": "user not exists",
            "data": None
        }), 400
    if mongo.db.files.find_one({"username": user_name, "filename": file_name}) is not None:
        return jsonify({
            "message": "file exists",
            "data": None
        }), 400
    mongo.save_file(user_name+'|'+file_name, file_storage)
    mongo.db.files.insert({
        "username": user_name,
        "filename": file_name
    })
    # temp = category_name + "." + item_name
    # mongo.db.users.update({"username": user_name}, {"$set": {temp: item.filename[:-4]}})

    # for x in mongo.db.users.find():
    #     print(x)
    return jsonify({
        "message": "success",
        "data": {
            "username": user_name,
            "filename": file_name
        }
    }), 200

@app.route("/get_file/<user_name>/<file_name>", methods=['DELETE', 'GET'])
def get_or_delete_file(user_name, file_name):
    if mongo.db.users.find_one({"username": user_name}) is None:
        return jsonify({
            "message": "user not exists",
            "data": None
        }), 400
    if mongo.db.files.find_one({"username": user_name, "filename": file_name}) is None:
        return jsonify({
            "message": "file not exists",
            "data": None
        }), 400
    if request.method == 'DELETE':
        mongo.db.files.delete_one({"username": user_name, "filename": file_name})
        return jsonify({
            "message": "success",
            "data": {
                "username": user_name,
                "filename": file_name
            }
        }), 200
    else:
        return mongo.send_file(user_name+'|'+file_name)

if __name__ == "__main__":
    app.run()
