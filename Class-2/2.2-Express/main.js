const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());
 
const users = [{
    name: "John Doe",
    kidneys:[{
        healthy: true
    },{
        healthy: false
    }]
}] ;

app.get("/",function(req,res){
const johnkidneys = users[0].kidneys;
const numberofkidneys = johnkidneys.length;
var healthykidneys = 0;
for(let i =0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
        healthykidneys = healthykidneys+1;
    }  
}
const unhealthykidneys = numberofkidneys - healthykidneys;
res.json({
    "totalKidneys": numberofkidneys,
    "healthyKidneys": healthykidneys,
    "unhealthyKidneys": unhealthykidneys
})
})

app.post("/",function(req,res){
 const isHealty = req.body.isHealty;
 users[0].kidneys.push({
    healthy: isHealty
})
res.json({
    "message": "Kidney added successfully"
})
})

app.put("/",function(req,res){
for(let i =0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        "message": "All kidneys updated successfully"
    })
})

app.delete("/",function(req,res){
const newkidneys = [];
for(let i =0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
        newkidneys.push({
            healthy: true
        });
    }
}
users[0].kidneys = newkidneys;
res.json({
    "message": "Unhealthy kidneys removed successfully"
})
})

app.listen(port,()=>{
    console.log("Server is running on port " + port);
})

app.get("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "admin" && password != "admin"){
        res.status(403).json({
            "message": "Unauthorized"
        });
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            "msg": "Wrong Input"
        });
        return;
    }
    res.send("Your Heart is healthy");
})
/*function calculateSum(n) {
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
*/
