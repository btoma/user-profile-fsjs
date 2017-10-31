'use strict';

var express = require('express');
var app = express();
var router = express.Router();
var users = require('/mock/users.json');
router.get('/users', function (req,res) {
  res.json({users: users});
});


//user: Add user to list.
//user: edit user on list
//user: update user on list
//user: delete user from list
app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('src'));
app.use('/api', router);

app.listen(3000, function () {
  console.log('The server is running on 3000 port');
});
