var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var sendgrid = require('sendgrid')(process.env.SENDGRID_KEY);
var http = require('http');
var _ = require('lodash');

var app = express();
app.use(express.static(__dirname + '/client'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(expressValidator());

app.get('/', function (req, res) {
    res.render('client/index.html');
});

app.post('/api/sendMessage', function (req, res) {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('message', 'Invalid message').notEmpty();
    req.checkBody('name', 'Invalid name').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.sendStatus(400);
        return;
    }

    sendgrid.send({
        to: 'contact@sebastianhof.com',
        from: req.body.email,
        subject: 'Message from ' + req.body.name,
        text: req.body.message
    }, function (err, json) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send();
        }
    });

});

app.get('/api/blog', function (req, _res) {

    var request = http.request({
        host: 'blog.sebastianhof.com',
        port: '80',
        // proxy port
        method: 'GET',
        path: 'http://blog.sebastianhof.com/content.json'
    }, function (res) {
        res.on('data', function (data) {
            var json = JSON.parse(data.toString());

            _.map(json.posts, function(post) {
                var substring = post.raw.substring(post.raw.indexOf('<!-- more -->') + 13);
                if (substring.length > 0) {
                    post.raw = substring;
                }

                return post;
            });

            _res.send(json);
        });
    });

    request.end();

});

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('sebastianhof.com listening at http://%s:%s', host, port);
});