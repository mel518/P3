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
    data = mongo.db.wines.find({},{'_id': 0,'taster_name':0,'taster_twitter_handle':0,'designation':0,'region_1':0,'region_2':0}).limit(5000)
    list_cur = list(data)
    json_data = jsonify(json_util.dumps(list_cur))
    return json_data

@app.route("/variety-list")
def variety_list():
    data = mongo.db.wines.distinct('variety')
    list_cur = list(data)
    return jsonify(list_cur)

@app.route("/select/<variety>")
def select(variety):
    data = mongo.db.wines.find({'variety':variety},{'_id': 0,'taster_name':0,'taster_twitter_handle':0,'designation':0,'region_1':0,'region_2':0})
    list_cur = list(data)
    return jsonify(list_cur)

@app.route("/coords")
def coords():
    data = mongo.db.merged.find()
    list_cur = list(data)
    json_data = jsonify(json_util.dumps(list_cur))
    return json_data



if __name__ == '__main__':
    app.run(debug=True)