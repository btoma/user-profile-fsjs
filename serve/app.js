
'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('src'));
app.use('/api', router);

app.listen(3000, function () {
  console.log('The server is running on 3000 port');
});
