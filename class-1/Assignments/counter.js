/*let count = 30;

while(count >= 0){
console.log(count);
count--;
}*/

//counter 
/*
setInterval(function counter(){
    let count =30;
    while(count>=0){
        console.log(count);
        count--;
    }
},1000);
*/
let timeleft = 30;
const timer = setInterval(()=>{
    console.log(timeleft);
    if(timeleft <= 0){
        clearInterval(timer);
        console.log("Time's up");
    }
    timeleft--;
},1000);