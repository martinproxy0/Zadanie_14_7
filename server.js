var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    fs.readFile('index.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });    
});
server.listen(9000);