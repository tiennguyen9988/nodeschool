var http = require("http");
var bl = require("bl");
http.get(process.argv[2], function(res){
	res.pipe(bl(function(err,data){
		if(err) throw err;
		console.log(data.toString());
		console.log(data.toString().length);
	}));
});