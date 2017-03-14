// Raw TCP server
var net = require('net');
var strftime = require('strftime');

var PORT = Number(process.argv[2])

// "YYYY-MM-DD hh:mm"
// "%Y-%m"

// March 13, 2017 17:56:12

var server = net.createServer((socket) => {
  socket.end(strftime('%Y-%m-%d %H:%M') + '\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen(PORT, () => {
  console.log('Time server started on', server.address());
});