const fs = require('fs');
fs.readFile('a.txt','UTF-8',function(err, data){
    console.log(err);// it constains error if any
    console.log(data);// it constains data if any
})
console.log("Hello World");
for(let i=0;i<1000000000;i++){
    i++;
}
console.log("Hello World 2");