require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {ApiError} = require('./helpers/errors');

const api = require('./api');
require('./db');
const CORS = require('./middlewares/cors');
const env = process.env.NODE_ENV || 'development';

const app = express();

app.set('env', env);
app.use(CORS);

app.use(cookieParser());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist', {index: false}));

app.use('/api', api);
app.use('/api/*', (req, res) => {
  res.status(404).end();
});
app.use((err, _req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(400).send({code: err.code, message: err.message, additionalMessage: err.additionalMessage});
  }
  next(err);
});
app.use((err, _req, res) => {
  res.status(err.status || 500).end();
});

app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
  console.log('Server runing on port:' + server.address().port);
});
