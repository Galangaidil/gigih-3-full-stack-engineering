var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const songsController = require('./controllers/songs.controller');
const playlistsController = require('./controllers/playlists.controller');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/songs', songsController);
app.use('/api/playlists', playlistsController);

module.exports = app;
