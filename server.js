const express = require("express")
require("dotenv").config()

const app = express()

app.get("/", (req,res)=>{
    res.json({ user: 'tobi' })
})

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log("server running on port" , process.env.PORT);
    }
})