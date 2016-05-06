var module = require("./module.js");
var callback = function(err, filtered){
		if (err) throw err;
		filtered.forEach(function(item){
			console.log(item);
		})
		return filtered;
	};
var files = module(process.argv[2], process.argv[3], callback);