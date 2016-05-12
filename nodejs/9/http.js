var http = require('http');
var fullString = '';
http.get(process.argv[2], function(res){
	res.on('data', function(data){
		fullString += data.toString()+"--"+process.argv[2]+"--";
	});
	res.on('end', function(end){
		console.log(fullString);
		http.get(process.argv[3], function(res){
			res.on('data', function(data){
				fullString = data.toString()+"--"+process.argv[3]+"--";
			});
			res.on('end', function(end){
				console.log(fullString);
				http.get(process.argv[4],function(res){
					res.on('data', function(data){
						fullString = data.toString()+"--"+process.argv[4]+"--";
					});
					res.on('end', function(end){
						console.log(fullString);
					});
				});				
			});
		});
	});
});