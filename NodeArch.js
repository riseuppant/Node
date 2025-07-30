const fs = require('fs')

console.log(1)
//Blocking...
const result= fs.readFileSync('./FileHandling/Contacts.txt',"utf-8")
console.log(result)
console.log(2)

//Non-Blocking
console.log("1,2,3,4,5,2,3,4")
fs.readFile("./FileHandling/Contacts.txt","utf-8",(err,result)=>{
    console.log(result)
})
console.log("2,3,4")

 const os = require('os')
 console.log(os.cpus().length)