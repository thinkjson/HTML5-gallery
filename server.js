var express = require('express');
var app = express.createServer();

app.use(express['static'](__dirname));

// Enable for testing on c9
if (process.env.C9_PORT)
    app.listen(process.env.C9_PORT);

exports.app = app;