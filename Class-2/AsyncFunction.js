const fs = require("fs") //required th read a file from the file system

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hello World");
let a =0;
for(let i = 0; i < 10000000000000; i++){
    a++;
}
console.log("Done");