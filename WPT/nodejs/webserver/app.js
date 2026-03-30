
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

let host = process.env.HOST;
let port = process.env.PORT;

app.get("/home",(req,res,next)=>{
    res.send("get request for home");
});

app.get("/about",(req,res,next)=>{
    res.send("get request for about");
});

app.get("/contact",(req,res,next)=>{
    res.send("get request for contact");
});


app.get("/services",(req,res,next)=>{
    res.send("get request for services");
});

app.get("/contact",(req,res,next)=>{
    res.send("get request for contact");
});

app.get("/*splat",(req,res,next)=>{
    res.send("404 Not Found");
});

// Serve static files from "public" folder
const staticFilePath = path.join(__dirname, "public");
console.log(staticFilePath);
app.use(express.static(staticFilePath));


app.listen(port,()=>{
    console.log(`my web server get started on ${host}:${port}`);
});
