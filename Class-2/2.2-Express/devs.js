const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){ 
    
    const kidneys = req.body.kidneys;
    const kidneyslength = kidneys.length;

    res.send("You have " +kidneyslength + " kidneys");
});

app.listen(3000)