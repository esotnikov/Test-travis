const express = require('express');
const path = require('path');
const app = require();
app.use(express.static(__dirname + 'dist/Test'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/Test/index.html'));
});
app.listen(process.env.PORT || 8080);