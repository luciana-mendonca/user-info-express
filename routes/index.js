var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */

// All Users
router.get('/', function(request, response) {
    fs.readFile('./users.json', 'utf-8', function (error, data){
      if (error) {
        throw error;
      }
      var userList = JSON.parse(data);
      response.render('index', {userList});
    });
});

// Search bar
router.get('/search', function(request, response) {
  response.render('search');
});

router.post('/search', function(request, response) {
  fs.readFile('./users.json', 'utf-8', function (error, data){
    if (error) {
      throw error;
    }
    var userList = JSON.parse(data);
    var searchResult = [];
    var searchTerm = request.body.userInput;
    for (var i = 0; i < userList.length; i++) {
      var fullName = userList[i].firstname + ' ' + userList[i].lastname;
      if (userList[i].firstname.indexOf(searchTerm) > -1 || userList[i].lastname.indexOf(searchTerm) > -1 || fullName === searchTerm) {
        searchResult.push(userList[i]);
      }
    }
    response.render('results', {searchResult});
  });
});

// Results

router.get('/results', function(request, response) {
  response.render('results');
});

module.exports = router;
