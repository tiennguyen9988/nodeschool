var mymodules = require('./mymodule.js');
var dir = process.argv[2];
var filter = process.argv[3];
mymodule(dir,filter,function(err,data){
	if(err){
		console.log("There was an error"+err);
	}
	data.forEach(function(file){
		console.log(file);
	});
});