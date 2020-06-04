var express = require('express');
var app = express();


app.use(require('./users'));
app.use(require('./index'));



module.exports = app;