var module = require('./dirmodule')

// The module must export a single function that takes
// three arguments: the directory name, the filename
// extension string and a callback function

var folder = process.argv[2]
var ext = process.argv[3]

module(folder,ext,function(err, list){
	if(err) return console.error(err)
	list.forEach(function(file){
		console.log(file)
	})
})