
var mysql   = require("mysql");
var express = require("express");
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');
var connection = require("../database");

var findChildsForm = function (req, res) {
	var formName = req.params.formName
	var ChildID = req.params.childID
	
	var table = [formName,ChildID]
	
	var query = 'SELECT * FROM ?? WHERE ChildID = ?'
	connection.query(query,table,function(err, rows) {
		if(err){
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Success", "Form" : rows});
		}
	});
};
module.exports = findChildsForm;