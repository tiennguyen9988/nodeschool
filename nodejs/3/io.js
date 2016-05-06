var fs  = require("fs");
var content = fs.readFileSync(process.argv[2]);
var lines = content.toString().split('\n').length;
console.log(lines);
// file://C:\Users\Administrator\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html