const express = require("express")
const axios = require("axios")

const btn = document.getElementById("submit-btn")

const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html")
    btn.addEventListener("click", (event)=>{
        event.preventDefault()
    })
        
})

app.listen(4000, ()=> console.log("working..."))