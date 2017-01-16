MAX_NUMBER = 10000
var http = require('http');
var pwrlvl = function () { return Math.floor((Math.random() * MAX_NUMBER) + 1) };

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Your power level is: '+pwrlvl()+'\n');
}).listen(8080);

console.log('Server started');