/*
// Declaring and using function
function sum(a,b){
    return a+b;
}

const result = sum(10,20);
console.log(result);
*/
/*
//Using Callbacks
function sum(num1,num2,adi){
    var result = num1 + num2;
    adi(result);
}
function displayresult(data){
    console.log("The digit of sum is : "+data);
}
function displayresultPassive(data){
    console.log("Digit's sum is : "+data);
}
var res = sum(1,2,displayresultPassive);
function sum(num1,num2,adi){
    var result = num1 + num2;
    adi(result);
}
function displayresult(data){
    console.log("The digit of sum is : "+data);
}
function displayresultPassive(data){
    console.log("Digit's sum is : "+data);
}
var res = sum(1,2,displayresultPassive);
*/
/*
function calculateArithmatic(a,b,calculatefinalresult){
   const ans= calculatefinalresult(a,b)
   return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const res = calculateArithmatic(1,2,sub);
console.log(res);
*/

//Set Timeout Function
function Greet(){
    console.log("Hello World");
}
setTimeout(Greet,2*1000);
setInterval(Greet,1*1000);