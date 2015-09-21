import express = require('express');
import mongoose = require('mongoose');
import config = require('./config');
var restIO = require('rest-io');
var multer = require('multer');
var app = express();

app.use(express.static(__dirname + '/../'));
app.use(express.static(__dirname + '/../../app/bower_components/'));

restIO(app, {
  resources: __dirname + '/resources'
});

var connect = config.getMongoConfig();
var serverConfig = config.getServerConfig();

app.use(multer({
  inMemory: true
}));

mongoose.connect(connect.uri, connect.options);

app.listen(serverConfig.port, () => {
  console.log('Server has started under port: ' + serverConfig.port);
});

export = app;
