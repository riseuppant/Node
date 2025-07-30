const fs = require("fs")
const http = require("http")

const myServer=http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Request Recieved\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case "/":
            res.end("Home");
            break;
            case "/aboutUs":
            res.end("About Us");
            break;
            case "/Contact":
            res.end("ContactUs")
            break;      
            default:
                res.end("404 Not Found")  
        }
    })
})

myServer.listen(8000,()=>{
    console.log("Server is running")
})

//res.end() ke andar ka data render kardega browser mai
//req res are handlers
