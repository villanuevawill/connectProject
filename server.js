var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/src'));

app.listen(8000);