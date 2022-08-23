var http = require('http');

http.createServer((request, Response) => {
    console.log(request, Response);
    Response.end("welcome");
}).listen(4000, 'localhost');