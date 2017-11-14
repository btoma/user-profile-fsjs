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

router.post('/user', function(req, res, next) {
  const User = mongoose.model('User');
  const userData = req.body;

  User.create(userData, function(err, newUser) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(newUser);
  });
});

//user: edit user on list
router.delete('/user/:userId', function(req, res, next) {
  const User = mongoose.model('User');
  const userId = req.params.userId;
  console.log(req.params.userId);

  User.findByIdAndRemove(userId, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Todo Deleted' });
  });
});



router.put('/user/:userId', function(req, res, next) {
  const User = mongoose.model('User');
  const userId = req.params.userId;

  User.findById(userId, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(404).json({message: "File not found"});
    }

    user = req.body;

    user.save(function(err, savedUser) {
      res.json(savedUser);
    })

  })
});

module.exports = router;
