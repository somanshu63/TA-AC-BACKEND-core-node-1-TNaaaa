var fs = require('fs');

fs.readFile('./content.md', (err, content) => {
    console.log(err, content.toString());
});


fs.readFileSync('./content.md', (err, content) => {
    console.log(err, content.toString());
});

fs.readFile('./content.md', (err, content) => {
    console.log(err, content.toString());
});


var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("welcome to buffer");
console.log(buff1);