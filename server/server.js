var http = require('http'),
    io = require('../deps/socket.io-node');
    
var server = http.createServer(function(request, response) {
  response.writeHead(200,{'Content-type':'text/plain'});
  response.end('node-monitor');
});
server.listen(8080);

var socket = io.listen(server);
socket.on('connection', function(client) {
  console.log('client connection!');
  client.on('message', function(data){
    console.log('client message: ' + data);
  });
  client.on('disconnect', function(){
    console.log('client discconect');
  });
})

var tail = function(filename) {
  var tail = require('child_process').spawn('tail', ['-f', filename]);
  tail.stdout.on('data', function(data){
    console.log('stdout: ' + data);
    socket.broadcast(data);
  });
  tail.stderr.on('data', function(data){
    console.log('stderr: ' + data);
  });
  tail.on('exit', function(code) {
    console.log('tail exited with code ' + code);
  });
}

tail('/private/var/log/apache2/error_log');