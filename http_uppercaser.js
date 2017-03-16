// HTTP server that receives POST requests
// returns POST body characters, all in upper-case, to the client.
//
// node http_uppercaser.js PORT

const map  = require('through2-map'),
	  http = require('http'),
	  fs   = require('fs');

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
	if(req.method !== 'POST'){
		res.end('send a POST request');
		console.log('non-POST request detected.');
		return;
	}
	req.pipe(map((chunk) => { 
		return chunk.toString().toUpperCase()})).pipe(res)
}).on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen(port, () => {
  console.log('POST upper-caser server started on', server.address());
});