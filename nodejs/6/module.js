var fs = require("fs");
var path = require("path");

module.exports = function(url, ext, callback){
	return fs.readdir(url, function(err,list){
		if(err) return callback(err);
		var extension = "."+ext;
		var filtered = list.filter(function(item){
			return path.extname(item) === extension;
		});
		return callback(null, filtered);
	});
}