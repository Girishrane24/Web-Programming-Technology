
const express = require('express');
const app = express();

app.get("/",(req,res,next)=>{
    //res.send("This is simple get request");
    res.sendFile(__dirname+"/index.html");
});

// this is simple get request, it will match the route /home and send the response "This simple get request for home page"

app.get("/home",(req,res,next)=>{
    res.send("This simple get request for home page");  
});


// This is parameterized route, it will match any route like /about/1, /about/2 etc. The value of id can be accessed using req.params.id
app.get("/about",(req,res,next)=>{
    //res.send("This simple get request for about page");  
    res.sendFile(__dirname+"/about.html");
});


// This is parameterized route, it will match any route like /about/1, /about/2 etc. The value of id can be accessed using req.params.id
app.get("/about/:id",(req,res,next)=>{
    res.send("This simple get request for about parameterized page");  
});

app.get("/contact",(req,res,next)=>{
    //res.send("This simple get request for contact page");  
    res.sendFile(__dirname+"/contact.html");
});

app.get("/service",(req,res,next)=>{
    //res.send("This simple get request for service page");  
    res.sendFile(__dirname+"/service.html");
});

// whild card route, it will match any route that is not defined above. It should be defined at the end of all routes, otherwise it will match all routes and the above routes will never be reached.
app.get("/*splat",(req,res,next)=>{
    //res.send("404 Not Found");  
    res.sendFile(__dirname+"/404.html");
});


app.listen(8888,()=>{
    console.log("Server is running on port 8888");
});

