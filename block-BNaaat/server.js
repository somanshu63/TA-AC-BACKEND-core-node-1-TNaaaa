var http = require('http');
var url = require('url');
var fs = require('fs');



var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;
    if(req.method == 'GET' && pathname == '/file'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./node.html', (err, content) => {
            res.end(content);
        });
    }else if(req.method == 'GET' && pathname == '/stream'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./node.html').pipe(res);
    }else{
        res.end("Page not found");
    }
}

server.listen(5555, () => {
    console.log('working at 5555 port');
});