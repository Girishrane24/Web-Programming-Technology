const fs = require("fs");

//create new diretory asynchronously
fs.mkdir("./newDir",(error,result)=>{});
// delete directory asynchronously
fs.rmdir("./newDirthree",(error,result)=>{
    console.log("directory removed");
})
// remove file asynchronously
fs.unlink("./dummy.txt",(error,result)=>{});

// create new directory  and new file in it.
fs.mkdir("./newDirTwo",(error,result)=>{
    fs.writeFile("./newDirTwo/writeMe.txt"," my name is Don",(error,result)=>{
        console.log("new directory and new file created");
    });
});
