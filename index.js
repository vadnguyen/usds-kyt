var nginy = require('nginy');
var express = require('express');

var app = express();

app.use(nginy);
process.env['DIRECTORY'] = './public';
console.log('DIRECTORY =', process.env.DIRECTORY)
console.log('CWD:',process.cwd());
app.listen(process.env.PORT || 3000);
console.log('NGINY App Started');
