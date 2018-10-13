var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('./users.json', 'utf-8', function (error, data){
      if (error) {
        throw error;
      }
      var userList = JSON.parse(data);
      res.render('index', {userList});
    });
});

router.get('/search', function(req, res){
  res.render('search');
});

module.exports = router;
