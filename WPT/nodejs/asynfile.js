const fs = require('fs');

// read file asynchronously 

fs.readFile("./writeOne.txt","utf-8",(error,data)=>{
 console.log(data);
  // write file asynchronously 
 fs.writeFile("./writeThree.txt",data,(error,data)=>{
    // append file asynchronously 
    fs.appendFile("./writeThree.txt"," In Infoway CDAC",(error,data)=>{});
 });
});




