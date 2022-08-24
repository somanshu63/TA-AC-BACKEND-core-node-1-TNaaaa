var http = require('http');
var url = require('url');
var fs = require('fs');


var server1 = http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers);
    console.log(res);
    res.end();
});

server1.listen(5000);


var server2 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('My first server in NodeJS');
    res.end();
});

server2.listen(5100);


var server3 = http.createServer((req, res) => {
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.headers['user-agent']);
});

server3.listen(5555);


var server4 = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`${req.url} ${req.method}`);
});

server4.listen(5566);


var server5 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`${req.headers}`);
});

server5.listen(7000, () => {
    console.log("server started at port 7k");
});


var server6 = http.createServer((req, res) => {
    res.statusCode = 202;
    res.end();
});

server6.listen(3333);


var server7 = http.createServer((req, res) => {
    res.writeHead( 202, {'Content-Type': 'text/html'});
    res.end(`<h3>Welcome to altcampus</h3>`);
});

server7.listen(8000, () => {
    console.log("server started at port 8k");
});


var server8 = http.createServer((req, res) => {
    res.writeHead( 202, {'Content-Type': 'application/json'});
    res.end(`{success: true, message: 'Welcome to Nodejs'}`);
});

server8.listen(8888, () => {
    console.log("server started at port 8.88k");
});


var server9 = http.createServer((req, res) => {
    res.writeHead( 202, {'Content-Type': 'text/html'});
    res.end(`<h2>posted for first time</h2>`);
});

server9.listen(5050, () => {
    console.log("server started at port 5050");
});


var server10 = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead( 202, {'Content-Type': 'text/plain'});
        res.end(`Somanshu Grover`);
    }else if(req.method == 'GET' && req.url == '/about'){
        res.writeHead( 202, {'Content-Type': 'text/html'});
        res.end(`<h2>Somanshu Grover</h2>`);
    }else{
        res.statusCode = 404;
        res.end('err');
    }
});

server10.listen(2345, () => {
    console.log("server started at port 2345");
});


var server11 = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url == '/users'){
        fs.readFile('./index.html', (err, content) => {
            res.end(content);
        });
    }else if(req.method == 'POST' && req.url == '/users'){
        res.writeHead( 202, {'Content-Type': 'text/plain'});
        res.end(`Posted for the second time`);
    }else{
        res.statusCode = 404;
        res.end('err');
    }
});

server11.listen(9000, () => {
    console.log("server started at port 9k");
});


var server12 = http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url);
    console.log(parsedUrl.pathname);
    var reqUrl = req.url;
    console.log(`parsed url pathname is ${parsedUrl.pathname}`);
    console.log(`requested url is ${req.url}`);
    var query = parsedUrl.query;
    res.setHeader('Content-Type', 'application/json');
    res.end(query);
});

server12.listen(9500, () => {
    console.log("server started at port 9.5k");
});