function add(a,b){
    return a + b
}

function subtract(a,b){
    return a-b;
}

console.log((add(2,5)))
// module.exports="Piyush"
//This is a module 
//Add function overwrite hojata hai
// module.exports=add
// module.exports=subtract

module.exports={
    addFn : add,
    subFn : sub
}
