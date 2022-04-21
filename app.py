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
    # data = mongo.db.wines.find({},{variety: 1, _id: 0})
    # data = mongo.db.wines.find({}).limit(5000)
     #this is the array produced on our local host server, can filter instead of select on js page
    list_cur = list(data)
    #print(type(list_cur))
    #json_data = jsonify(list_cur)
    # print(type(json))
    json_data = jsonify(json_util.dumps(list_cur))
    return json_data


@app.route("/variety-list")
def variety_list():
   
    data = mongo.db.wines.distinct('variety')
    
    list_cur = list(data)
    
    return jsonify(list_cur)


# @app.route("/")
# def homepage():
#     data = mongo.db.wines.find() #this is the array produced on our local host server, can filter instead of select on js page
#     list_cur = list(data)
#     json_data = jsonify(json_util.dumps(list_cur))
#     return json_data

@app.route("/select/<variety-list>")
def select(variety-list):
    data = mongo.db.wines.find({},{'_id': 0,'taster_name':0,'taster_twitter_handle':0,'designation':0,'region_1':0,'region_2':0})
    list_cur = list(data)
#     #print(list_cur)
#     #json_data = jsonify(list_cur)
    json_data = jsonify(json_util.dumps(list_cur))
    return jsonify(list_cur)

#templates or d3.json to call server



if __name__ == '__main__':
    app.run(debug=True)