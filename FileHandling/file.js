const { log } = require("console")
const fs= require("fs")

//Sync...
// fs.writeFileSync('./text.js','Hey There')

//Async 
//Has a callback mechanism when there is error we can use that to catch it
// fs.writeFile("./text.txt","hello World" ,(err)=>{})

//What is the differnce betwenn both 
//There is BLOCKING and NON BLOCKING

// const result = fs.readFileSync("./Contacts.txt","utf-8")

//Has a callBack mechanism over here which does not return anything
fs.readFile("./Contacts.txt" , "utf-8" , (err,result)=>{
    if(err){
        console.log("Error ",err )
    }
    else{
        console.log(result)
    }
}
)
console.log(typeof result)

fs.appendFileSync("./books.txt" , new Date().getDate().toLocaleString());


//Main use hai ki jab tum server ke logs ko append karoge 
console.log(fs.statSync('./books.txt'))

fs.mkdirSync("my-docs/a/b",{recursive:true})
