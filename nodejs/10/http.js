var net = require('net');
function zeroFill($num){
	return ($num < 10) ? ("0"+$num) : $num;
}

function now(){
	d = new Date();
	return d.getFullYear()+"-"+zeroFill(d.getMonth())+"-"+zeroFill(d.getDate())+" "+zeroFill(d.getHours())+":"+zeroFill(d.getMinutes()+":"+zeroFill(d.getSeconds()));
}

var server = net.createServer(function(socket){
	socket.end(now()+'\n');
});
server.listen(process.argv[2]);