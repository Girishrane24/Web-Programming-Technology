
require('dotenv').config();
const http = require('http');
const fs = require('fs');
var prompt = require('prompt');


prompt.start();
let host = process.env.HOST;
let port = process.env.PORT;

let server = http.createServer((req, res) => {

    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "content-type": "text/html" });
        let readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
        readStream.pipe(res);
    }
    if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        let readStream = fs.createReadStream(__dirname + "/about.html", "utf-8");
        readStream.pipe(res);
    }
    if (req.url === "/service") {
        res.writeHead(200, { "content-type": "text/html" });
        let readStream = fs.createReadStream(__dirname + "/service.html", "utf-8");
        readStream.pipe(res);
    }
    if (req.url === "/contact") {
        res.writeHead(200, { "content-type": "text/html" });
        let readStream = fs.createReadStream(__dirname + "/contact.html", "utf-8");
        readStream.pipe(res);
    }

});


prompt.get(['userid', 'pass'], function (err, result) {

    if (result.userid === "admin" && result.pass === "admin@123") {
        server.listen(port, () => {
            console.log(`serveer get started on ${host}:${port}`);
        })
    }else{
       console.log(`wrong crendentails`); 
    }
});