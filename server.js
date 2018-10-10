const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static("public"));

require('./config/sessions')(app);

app.set('view engine', 'ejs');

AWS.config.loadFromPath('./config.json');                             //config file???
let s3Bucket = new AWS.S3({params: {Bucket: "pnrimages"}});
const baseAWSURL = "https://s3-us-east-2.amazonaws.com/pnrimages/"

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
