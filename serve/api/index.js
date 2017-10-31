'use strict';
var express = require('express');
var router = express.Router();

router.get('/users', function (req,res) {
  res.json({users:[]});
});


//user: Add user to list.
//user: edit user on list
//user: update user on list
//user: delete user from list


