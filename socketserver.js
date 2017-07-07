var http = require('http');
var fs = require('fs');
var url = require('url');

var httpServer = http.createServer(handler);
httpServer.listen(1025);
console.log('Server listening on port 1025');


// var io = require('socket.io').listen(httpServer);
var io = require('socket.io')(httpServer);

function handler(req, res) {
  console.log("The URL is: " + req.url);
  var parsedUrl = url.parse(req.url);

  var path = parsedUrl.pathname;
  if (path == "/") {
    path = "index.html";
  }

  fs.readFile(__dirname + path,
    function(err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading' + req.url);
      }
      res.writeHead(200);
      res.end(data);
    });
}

io.on('connection',
  function(socket){
    console.log("we have a new client:" +socket.id);
    socket.on("sensor",function(data){
      console.log("got data from arduino receiver client: " + data);
      io.sockets.emit("sensor",data);
    })
  }
);
