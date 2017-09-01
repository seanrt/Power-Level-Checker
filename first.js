MAX_NUMBER = 10000
var http = require('http');
var pwrlvl = function () {
    var result = Math.floor((Math.random() * MAX_NUMBER) + 1);
    if (result > 9000) {
        result += " IT'S OVER 9000!!!!!";
    }

    if (result < 2000) {
        result += "HEUGHHHHH";
    }

    return result
};
var port = process.env.PORT || 3000;

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Your power level is: '+pwrlvl()+'\n');
}).listen(port);

console.log('Server started');