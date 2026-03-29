require("dotenv").config();
const http = require('http');

let host = process.env.HOST;
let port = process.env.PORT;

let server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("This is Home Request");
        res.end();
    } if (req.url == "/about") {
        res.write("This is About Request");
        res.end();
    }if (req.url == "/service") {
        res.write("This is Service Request");
        res.end();
    }
    if (req.url == "/contact") {
        res.write("This is contact Request");
        res.end();
    }
});

server.listen(port,()=>{
    console.log(`server get started on ${host}:${port}`);
})
