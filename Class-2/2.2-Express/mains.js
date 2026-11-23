const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "admin" || password != "admin"){
        res.status(401).json({
            "message": "Unauthorized"
        });
        return;
    }
    next();
}

function kidneymiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            "msg":"Invalid Input"
        });
        }
    next();
}

app.get("/health-checkup",userMiddleware, kidneymiddleware, (req,res)=>{
    res.json({
        "message": "You are healthy"
    })
})

app.get("/Kidney-checkup",userMiddleware, kidneymiddleware, (req,res)=>{
    res.json({
        "message": "You Kidney is healthy"
    })
})

app.listen(port);