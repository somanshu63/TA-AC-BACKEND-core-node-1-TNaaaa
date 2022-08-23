var http = require('http');

function handleRequest(req, res) {
    console.log(req.headers, req.method, req.url);
    res.end('welcome');
}

var server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log('server at 3000');
});