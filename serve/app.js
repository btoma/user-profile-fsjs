
'use strict';
const config = require('./config/index');
const bodyParser = require('body-parser');
// Load mongoose package
const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes');

const app = express();

// Connect to MongoDB and create/use database as configured
mongoose.connect(`mongodb://${config.db.host}/${config.db.dbName}`);

// Import all models
require('./models/user.model');

app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('src'));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(config.port, function () {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
