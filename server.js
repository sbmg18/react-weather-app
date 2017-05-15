var express = require('express');
var path = require('path');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(function(req, res, next) {

    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect(`http://${req.hostname}${req.url}`);
    } else {
        next();
    }
});
app.use(express.static('public'));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, function() {
    console.log(`Express is up on port ${PORT}.`);
});