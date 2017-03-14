// input:
//  three URLs
// returns:
//  print out collected contents of each URL
//  in the order recieved

var http = require('http');
var bl = require('bl');

const MAX_ARGS = 3;

function juggling_async (n) {
	http.get(process.argv[n], function(res) {
		res.pipe(bl(function (err,data){
			if(err){
				console.error(err);
			}
			data = data.toString();
			console.log(data);
		}));
		res.on('end', () => {
			if(n < MAX_ARGS + 1)
				juggling_async(++n);
		})
	});
}

juggling_async(2);

// http.get(process.argv[3], function(res) {
// 	res.pipe(bl(function (err,data){
// 		if(err){
// 			console.error(err);
// 		}
// 		data = data.toString();
// 		console.log(data);
// 	}));
// });

// http.get(process.argv[4], function(res) {
// 	res.pipe(bl(function (err,data){
// 		if(err){
// 			console.error(err);
// 		}
// 		data = data.toString();
// 		console.log(data);
// 	}));
// });