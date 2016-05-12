// Command: node 12_http_uppercaser.js 8000

var http = require('http');

var postHTML = 
    '<html><head><title>Post Example</title></head>' +
    '<body>' +
    '<form method="post">' +
    'Input 1: <input name="input1" value=""><br>' +
    'Input 2: <input name="input2" value=""><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

var server = http.createServer(function(req, res) {
    var body = "";
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        res.writeHead(200);
        if(postHTML) {
            res.end(postHTML);
            postHTML = undefined;
        }
        else if(body.length > 0) {
            res.end(body.toUpperCase());
        }
    });
});

console.log('Listening on http port ' + process.argv[2] + ' .........');
server.listen(+process.argv[2]);