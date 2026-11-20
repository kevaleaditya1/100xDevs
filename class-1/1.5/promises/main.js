let p = new Promise(function(resolve){
    setTimeout(function(){
    resolve("Promise is resolved");
    },3000);
})
function cb(){
    console.log(p);
}

let a = p.then(cb);
console.log(a)