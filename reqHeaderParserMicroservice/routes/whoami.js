// get public IP from : http://api.ipify.org/?format=json


var express = require('express');

var app = express.Router();

app.get("/api/whoami", function(req, res, next) {
    res.json({"Language": navigator.language});
});



module.exports = app;
