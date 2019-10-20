
var mysql   = require("mysql");
var express = require("express");
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');
var connection = require("../database");

var findUsersChildren = function (req, res) {
	
	UserID = req.params.id
	var table = [UserID]
	var query = "SELECT * FROM Child WHERE ParentID = ?";
	connection.query(query,table, function(err, rows) {
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Success", "UsersChildren" : rows});
        }
	});
};
module.exports = findUsersChildren;