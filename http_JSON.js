// HTTP server that serves JSON responses to GET requests
//
// node http_uppercaser.js PORT
// 
// API serves only GET requests
// 
// Paths:
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
// returns:
// 	{
// 	  "hour": 14,
// 	  "minute": 23,
// 	  "second": 15
// 	}
// /api/unixtime?iso=2013-08-10T12:10:15.474Z
// returns:
//	{ "unixtime": 1376136615474 }
//
// All others return 400 error

const http = require('http'),
	  url = require('url');

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
	if(req.method !== 'GET'){
		res.end('GET requests only.');
		console.log('recieved a non-GET request');
	}

	var route = url.parse(req.url, true),
		time = new Date(route.query.iso),
		result;

	if (route.pathname === '/api/parsetime'){
		result = parsetime(time);
	} else if(route.pathname === '/api/unixtime'){
		result = unixtime(time);
	}

	if (result){
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(400)
		res.end();
	}
}).on('error', (err) => {
	// handle errors here
	throw err;
});

function parsetime(time){
	return {
		hour : time.getHours(),
		minute : time.getMinutes(),
		second : time.getSeconds()
	};
}

function unixtime(time){
	return { unixtime : time.getTime() };
}

server.listen(port, () => {
	console.log('POST upper-caser server started on', server.address());
});