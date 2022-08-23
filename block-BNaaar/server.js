var http = require('http');
var url = require('url');


var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;
    if(req.method == 'GET' && pathname == '/'){
        console.log(req.method);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Welcome To Homapage");
    }else if(req.method == 'GET' && pathname == '/about'){
        console.log(req.method);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h2>this is all about NodeJS</h2>");
    }else if(req.method == 'POST' && pathname == '/about'){
        console.log(req.method);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("{message: this is a post request}");
    }else{
        res.end("Page not found");
    }
}

server.listen(5000, () => {
    console.log('working at 5k port');
});