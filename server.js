var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile('index.html');
});

server.listen(3000, function() {
  console.log('server listening on port 3000');
});

module.exports = server;
