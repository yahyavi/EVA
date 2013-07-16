var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('webgl/test.html');
  response.send(buffer.toString());
});

app.configure(function() {
  app.use('/js', express.static(__dirname + '/js'));
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
