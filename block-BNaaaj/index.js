console.log('Welcome to Nodejs');

var os = require('os');
console.log(`number of cpu's ${os.cpus().length}`);
console.log(`free memory ${os.freemem()}`);
console.log(`uptime ${os.uptime()}`);
console.log(`version from os module ${os.version()}`);

var { readFile, unlink} = require('fs');


Buffer.alloc(12);
Buffer.toString();

//blocking code
console.log("start");
for (let index = 0; index < 1000000000; index++) {

}
console.log("end");


//non-blocking code
console.log("start");
setTimeout(() => {
    console.log("middle");
    }, 5000);
console.log("end");