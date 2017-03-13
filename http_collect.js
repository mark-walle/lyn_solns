// collect an entire stream for an HTTP GET request
// write two lines to stdout/console:
//  an integer representing the # of characters recieved
//  the complete String of characters sent by the server

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
	res.pipe(bl(function (err,data){
		if(err){
			console.error(err);
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});