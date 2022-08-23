var url = require('url');
var baseUrl = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;

var parsedUrl = url.parse(baseUrl, true); 
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
