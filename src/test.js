import * as mysql from 'mysql';

var mysqltest = require('mysql');

var con = mysqltest.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'ColorfulSpots',
    password: 'thecrew'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});