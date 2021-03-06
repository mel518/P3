from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import json
from bson.json_util import dumps
from matplotlib import projections
from zmq import ROUTER
from bson import json_util
from flask_cors import CORS

# Create an instance of Flask
app = Flask(__name__)
CORS(app)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/project3")


@app.route("/")
def homepage():
    # want country, province, price, and points to be NOT null
    data = mongo.db.wines.find({},{'_id': 0,'taster_name':0,'taster_twitter_handle':0,'designation':0,'region_1':0,'region_2':0}).limit(5000)
    # data = mongo.db.wines.find({}).limit(5000)
     #this is the array produced on our local host server, can filter instead of select on js page
    list_cur = list(data)
    #print(type(list_cur))
    #json_data = jsonify(list_cur)
    # print(type(json))
    json_data = jsonify(json_util.dumps(list_cur))
    return json_data


@app.route("/coords")
def coords():
    data = mongo.db.merged.find()
    list_cur = list(data)
    json_data = jsonify(json_util.dumps(list_cur))
    return json_data



# @app.route("/coords")
# def coords():
#     data = mongo.db.coordinates2.find()
#     list_cur = list(data)
#     json_data = jsonify(json_util.dumps(list_cur))
#     return json_data

# @app.route("/")
# def homepage():
#     data = mongo.db.wines.find() #this is the array produced on our local host server, can filter instead of select on js page
#     list_cur = list(data)
#     json_data = jsonify(json_util.dumps(list_cur))
#     return json_data

# @app.route("/select/<state>")
# def select(state):
#     data = mongo.db.wines.find()
#     list_cur = list(data)
#     #print(list_cur)
#     #json_data = jsonify(list_cur)
#     json_data = jsonify(json_util.dumps(list_cur))
#     return json_data

#templates or d3.json to call server



if __name__ == '__main__':
    app.run(debug=True)

#change name html and js, share files with group member, they'll push to main, i'll swtich to main and pull, git branch "new branch", push everything, pull request into main branch
#nother way: clone main to new place, add files, create new branch, commit all files, push to new branch, pull request from main