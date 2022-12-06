const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const { urlencoded } = require("express")




const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html")
      
})

app.post('/', (req, res)=>{
    
})

app.listen(4000, ()=> console.log("working..."))