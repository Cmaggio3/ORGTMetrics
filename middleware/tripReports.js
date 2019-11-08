var mysql   = require("mysql");
var express = require("express");
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');
var connection = require("../database");

var tripReports = function (req, res) {
    var query = "SELECT * FROM TripReports";
    connection.query(query, function(err, rows) {
        if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
			res.json({"Error" : false,"Message" : "Success", "User" : rows});
        }
    });
};
module.exports = tripReports;
