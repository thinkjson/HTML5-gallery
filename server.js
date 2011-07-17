var express = require('express');
var app = express.createServer();

app.use(express['static'](__dirname));

// Enable for testing on c9
app.listen(process.env.C9_PORT);

exports.app = app;