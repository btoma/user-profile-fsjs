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


router.put('/user/:userId', function(req, res, next) {
  const File = mongoose.model('User');
  const userId = req.params.userId;

  File.findById(userId, function(err, user) {
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

//user: edit user on list

router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, doomedFile) {
      res.json(doomedFile);
    })

  })
});


module.exports = router;
