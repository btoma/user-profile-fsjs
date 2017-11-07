'use strict';

const express = require('express');
const users = require('../../mock/users.json');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/users', function (req,res) {
  mongoose.model('User').find({}, function(err, user) {
    res.json(user);
  });
});

// router.post('/user', function(req, res, next) {
//   const User = mongoose.model('User');
//   const userData = {
//     title: req.body.title,
//     description: req.body.description
//   };
//
//   User.create(userData, function(err, newUser) {
//     if (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//
//     res.json(newUser);
//   });
// });

//user: edit user on list
//user: update user on list
//user: delete user from list


module.exports = router;
