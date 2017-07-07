# Simple framework for browser talking to Arduino


## Dependencies
* node.js (download from their website)
* socket.io (npm install socket.io)
* serialport (npm install serialport)

## Files explanation
* app.js:   main visual/other content lives here
* socketserver.js:    our server file
* receiveFromSocket.js    client side, a seperate simple js file to receive data from socket server
* arduinoPort, runs seperately in terminal, a port between Arduino and browser

## Steps
### 1. Run file socketserver.js to start socket server communication
In terminal, type>>> node socketserver.js
### 2. Run serialport file to receive data from Arduino
note: after loading program to arduino board<br />
in our case is node arduinoPort.js
### 3. Go to browser and type the address
In our case is http://localhost:1025


## Useful links
[ITP tutorial by Tom Igoe](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/)
<br />
[socket io](https://socket.io/docs/)
<br />
[serial port package documentation](https://www.npmjs.com/package/serialport#serial-port-terminal)
<br />
