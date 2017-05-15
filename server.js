var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, function() {
    console.log("Express is up on port 3000.");
});