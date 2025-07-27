const math  = require("./index.js")//CommonJS Module

// ./ means searching in the current directory 
// If you try without that then it will try to search in the existing libraries

// console.log("math value is "+ math);
// console.log("math value is "+ math(5,6));
// console.log("math value is "+ math(5,6));

console.log("math value is "+ math.sub(2,4));   