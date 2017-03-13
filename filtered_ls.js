var fs = require('fs');

// var args = process.argv.slice(2, process.argv.length)

// var dir = args[0];
// var filter = args[1];

// fs.readdir(dir,function(err, list){
// 	if(err){
// 		return console.log(err);
// 	}
// 	for(var i = 0; i<list.length; i++){
// 		var line = list[i].split('.')
// 		if(line[1] === filter){
// 			console.log(line[0] + '.' + line[1])
// 		}
// 	}
// })

var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
	if (err) return console.error(err)
		files.forEach(function (file) {
			if (path.extname(file) === ext) {
				console.log(file)
			}
		})
})