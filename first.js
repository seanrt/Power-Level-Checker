MAX_NUMBER = 10000
var http = require('http');
var pwrlvl = function () { return Math.floor((Math.random() * MAX_NUMBER) + 1) };
var port = process.env.PORT || 300

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Your power level is: '+pwrlvl()+'\n');
}).listen(port);

console.log('Server started');