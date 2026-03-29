
const os = require('os');
const path = require('path');

console.log(os.arch());
console.log(os.hostname());
console.log(os.homedir());
console.log("total memory:",os.totalmem());
console.log("free memory:",os.freemem());
console.log(os.cpus());

// path module methos 
console.log(__dirname);
console.log(__filename);
console.log(path.extname(__filename));
console.log(path.isAbsolute(__filename));
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.join(__dirname,"/myhome/asstes"));
