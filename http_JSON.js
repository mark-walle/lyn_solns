// HTTP server that serves JSON responses to GET requests
//
// node http_uppercaser.js PORT

// Paths:
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
// 	{
// 	  "hour": 14,
// 	  "minute": 23,
// 	  "second": 15
// 	}
// /api/unixtime?iso=2013-08-10T12:10:15.474Z
// 	{ "unixtime": 1376136615474 }

const strftime = require('strftime'),
	  map  = require('through2-map'),
	  http = require('http'),
	  fs   = require('fs');

// listen on first argument
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
	if(req.method !== 'GET'){
		res.end('GET requests only.');
		console.log('recieved a non-GET request');
	}
	var pathname = require('url').parse(req.url).pathname
	console.log(pathname);
	if (pathname === '/api/parsetime'){
		// req.pipe(map((chunk) => { 
		// return chunk.toString().toUpperCase()})).pipe(res)
		var iso = String(require('url').parse(req.url, true).query.iso)
		console.log(iso)
		res.end('reached /api/parsetime' + iso);
		console.log('/api/parsetime requested');
	}
	if(pathname === '/api/unixtime'){
		var iso = String(require('url').parse(req.url, true).query.iso)
		console.log(iso)
		// req.pipe(map((chunk) => { 
		// return chunk.toString()})).pipe(res)
		res.end('reached /api/unixtime' + iso);
		console.log('/api/unixtime requested');
	}
	res.end('');
	return;
}).on('error', (err) => {
  // handle errors here
  throw err;
});

server.listen(port, () => {
  console.log('POST upper-caser server started on', server.address());
});