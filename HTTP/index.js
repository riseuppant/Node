//Entry point

const http =require("http")

const myServer= http.createServer((req,res)=>{
    console.log(req)
    res.end("Hello from server")
})


myServer.listen(8000,()=>{
    console.log("Server Started")
})


//Server ko handle karne ke liye incoming requests ko process karo

//Use a callback function in createServer which processes callback function which has req and res for incoming call and 
//Req object has meta data, ip add etc and response object is sent to the user back  

//Req mai kha se request aa rhi hai uske baare mai info