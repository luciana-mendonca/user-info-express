var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("about to render");
    fs.readFile('./users.json', 'utf-8', function (error, data){
      console.log("readfile is working");
      if (error) {
        throw error;
      }
      var userList = JSON.parse(data);
      res.render('index', {userList});
    });
});

module.exports = router;
