var express = require('express');
var router = express.Router();
var db=require('../database');


//Fetch data from MySQL database table
router.get('/business-list', function(req, res, next) {
  var sql='SELECT * FROM business';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('business-list', {BusinessData: data});
  });
});


module.exports = router;
