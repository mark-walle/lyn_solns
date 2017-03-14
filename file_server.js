// http server of a file (the same file) on each request
//
// node file_server.js PORT FILE

const http = require('http'),
	  fs   = require('fs');

const src = fs.createReadStream(String(process.argv[3])),
      port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	src.pipe(res)
}).on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen(port, '127.0.0.1', () => {
  console.log('File server started on', server.address());
});