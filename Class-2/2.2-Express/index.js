const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/",function(req,res){
    res.send("Hello World");
})

app.post("/conversations",function(req,res){
    console.log(req.headers)
    res.send("Received a POST request to /conversations");
    const msg = req.body.msg;
    console.log(msg);
})

app.listen(port,function(){
    console.log("Server is running on port " + port);
})