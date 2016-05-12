var http = require('http')
var url = require('url')
http.createServer(function(inStream, outStream) {       
	var result = '';
	var d = '';
	var urlObject = url.parse(inStream.url, true);
	console.log(urlObject);
	if(urlObject.pathname === '/api/parsetime') {
	    result = urlObject.query.iso;
	    d = new Date(result);
	    result = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
	}               
	else if (urlObject.pathname === '/api/unixtime') {
	    result = urlObject.query.iso;	    
	    d = new Date(result);
	    result = {"unixtime": d.getTime()};
	}
	if (result) {
	    outStream.writeHead(200, { 'Content-Type': 'application/json' });
	    outStream.end(JSON.stringify(result));
	} else {
		outStream.writeHead(404);
	    outStream.end();
	}           
}).listen(process.argv[2]);
//===== run =======/
// http://localhost:9000/api/parsetime?iso=2013-08-10T12:10:15.474Z
// http://localhost:9000/api/unixtime?iso=2013-08-10T12:10:15.474Z