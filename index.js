var nginy = require('nginy');
var express = require('express');

var app = express();

app.use(nginy);

app.listen(process.env.PORT || 3000);

console.log('NGINY App Started on port:', process.env.PORT || 3000);
