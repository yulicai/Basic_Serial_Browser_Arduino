/*

  get data from socket server, and pass it to the main visual app later

*/


var socket = io('http://localhost:1025');
var dataArduino = null;

socket.on('connect', function() {
  console.log('receive from socket >>>    connected');
});

socket.on('sensor', function(data) {
  console.log('receive from socket >>>    arduino data: ' + data);
  dataArduino = data;
});
