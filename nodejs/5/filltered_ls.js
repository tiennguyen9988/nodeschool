var fs = require("fs");
var path = require('path');
var direct = process.argv[2];
var extend = process.argv[3];
fs.readdir(direct, function(err, list){
	if (err) throw err;
	// console.log(list);
	list.forEach(function(file){
		if(path.extname(file)==="."+extend){
			console.log(file);
		}
	});
});