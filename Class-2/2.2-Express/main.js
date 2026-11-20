const express = require("express");
const port = 3000;
const app = express();

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

app.get("/",function(req,res){
    const n = req.query.n;
    const sum = calculateSum(n);
    res.send(sum);
})

app.listen(port,()=>{
    console.log("Server is running on port " + port);
})