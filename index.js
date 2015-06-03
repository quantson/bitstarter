var express = require('express')
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html');  
  var hello = buffer.toString();
  response.send(hello)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
