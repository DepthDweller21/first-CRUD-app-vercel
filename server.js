const express = require("express");
const parser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const app = express();

// not sure what this is but I need it to do something related to json, parsing, urls and APIs, will find out soon enough

app.use(parser.urlencoded({ extended: true }));

// renders everything in the public folder

app.use(express.static("public"));


/* all this till now was the application initialisation
this line of code listens on path /quotes which the HTML responds on*/

//P0YvljIktS2BbbVN
