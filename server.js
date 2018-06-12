
// Server side Code

var http = require('http');// To make http calls
var express = require('express');
var app = express();
var ROOT = '/html'; // The root directory for static pages
var PORT = 3000;


app.use(express.static(__dirname + ROOT));

app.listen(PORT, function () {
    console.log ('Server listening at PORT 3000!');
});
