// get public IP from : http://api.ipify.org/?format=json


var express = require('express');
var app = express.Router();

app.get("/", function(req, res, next) {
      res.json({"ipaddress" : req.headers['x-forwarded-for'].split(',')[1], 
                "language" : req.headers['accept-language'], 
                "software": req.headers['user-agent']});
});
  



module.exports = app;
