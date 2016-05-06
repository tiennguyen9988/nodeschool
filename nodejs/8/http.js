var http = require('http');
http.get(process.argv[2],function(res){
	var fullString = "";
	res.on("data",function(data){
		fullString += data.toString();
	});
	res.on("end", function(){		
		console.log(fullString);
		console.log(fullString.length);
	})
})