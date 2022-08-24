var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname);
    
    if(req.method == 'GET' && parsedUrl.pathname == '/'){
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./application/index.html', (err, content) => {
            console.log(err);
            res.end(content);
        });
    }
    
    if(req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./application/assets/stylesheets' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(req.url.split('.').pop() === 'js') {
        res.setHeader('Content-Type', 'text/js');
        fs.readFile('./application/assets/js' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/Luigi.png') {
        res.setHeader('Content-Type', 'image/png');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/question.png') {
        res.setHeader('Content-Type', 'image/png');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/1up.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/bobomb.jpg') {
        res.setHeader('Content-Type', 'image/jpg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/bullet.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/coin.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/goomba.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/mario.png') {
        res.setHeader('Content-Type', 'image/png');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/mushroom.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/peach.png') {
        res.setHeader('Content-Type', 'image/png');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/shell.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/star.jpg') {
        res.setHeader('Content-Type', 'image/jpg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }

      if(parsedUrl.pathname == '/assets/thwomp.jpeg') {
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./application/assets/images/' + parsedUrl.pathname.slice(8), (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }
      
      
}

server.listen(5000, () => {
    console.log('server running at 5000');
});