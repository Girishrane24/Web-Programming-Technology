
const express = require("express");
const app = express(); // express application object , It take function as argument and return an object which we can use to define our routes and middleware

app.get("/product",(req,res,next)=>{
    res.send(`This is simple get request for ${req.url}`);
});

app.delete("/product",(req,res,next)=>{
    res.send(`This is simple delete request for ${req.url}`);
});

app.post("/product",(req,res,next)=>{
    res.send(`This is simple post request for ${req.url}`);
});

app.put("/product",(req,res,next)=>{
    res.send(`This is simple put request for ${req.url}`); // it will match the route /home and send the response "This simple get request for home page"
});     

app.listen(8888,()=>{
    console.log("api server get started on port 8888");      
})

