var express = require('express');
var router = express.Router();
var db=require('../database');
var b_Data;

//Fetch data from MySQL database table
router.get('/', function(req, res, next) {
  var sql='SELECT * FROM business';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('index', {businessdata: data});
  b_Data = data;
  });
});

module.exports = router;