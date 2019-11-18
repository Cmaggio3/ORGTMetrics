var cors = require('cors');
var express = require("express");

var app  = express();
app.use(cors())

var http = require('http');
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var config = require('./config');
var config = require('./database');

var fullRoster = require('./middleware/fullRoster');
var tripReports = require('./middleware/tripReports');

var port = process.env.PORT || 4200;

//var twilio = require('twilio');







app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, function() {
    console.log('Express server listening on port ' +port);
});



app.get('/roster/',fullRoster);
app.get('/reports/',tripReports);

var apiRoutes = express.Router();

apiRoutes.use(bodyParser.urlencoded({ extended: true }));
apiRoutes.use(bodyParser.json());
//route middleware to verify a token

//apiRoutes.post('/children/',addNewChild);


app.use('/api', apiRoutes);
