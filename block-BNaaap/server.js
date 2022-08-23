var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method);
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.end();
}
server.listen(4444);