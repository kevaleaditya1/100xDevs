function findSum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}
function findsumto100(){
    console.log(findSum(2605));
}
setTimeout(findsumto100, 3000);
console.log("Hello ");