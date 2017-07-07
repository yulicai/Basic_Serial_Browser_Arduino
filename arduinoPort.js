/*

  * to receive data from arduino serial port, and send the data orver to socket server
  * a helpful page by Tom Igoe: https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/
  * cd to the file folder, type node arduinoPort.js in terminal to run it
  
*/


var SerialPort = require('serialport');

/* run this if we don't know the port name */
// list serial ports:
// SerialPort.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//   });
// });

var myPort = new SerialPort('/dev/cu.usbmodem14141', {
  baudRate: 115200,
  parser: SerialPort.parsers.readline('\n')
});

myPort.on("open", function(){
  console.log('serial port open');

  var socket=require("socket.io-client")('http://localhost:1025');
  socket.on('connect',function(){
    console.log("socket conneted");
    myPort.on('data',function(data){
      console.log('data from arduino: '+ data);
      socket.emit('sensor',data);
    });
  });

});

// Debugging purpose
// myPort.on('data',function(data){
//   console.log('data from arduino: '+ data);
// });
