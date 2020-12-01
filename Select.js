var mysql = require('mysql');
var http = require ('http');

var con = mysql.createConnection({
  host: "localhost",
  user     : 'root',
  password : '',
  database : 'products'
});

var json;