var http = require('http');
var bl = require('bl');
var fullString = '';
var count = 0;
var result = [];
for(var $i = 2; $i < process.argv.length; $i++){
	(function(argv){
		http.get(argv, function(res){
			res.pipe(bl(function(err, data){
				if(err) throw err;			
				result[count]=data+"--"+argv+"--"
				count++;
				if(count == process.argv.length-2){
					for(var $j = 0; $j < result.length; $j++){
						console.log(result[$j]);
					}
				}				
			}));
		})
	})(process.argv[$i]);
}