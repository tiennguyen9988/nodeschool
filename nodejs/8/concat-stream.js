var http = require("http");
var concatStream = require("concat-stream");
http.get(process.argv[2], function(res){
	res.pipe(concatStream(function(data){
		console.log(data.toString());
		console.log(data.toString().length);
	}));
})