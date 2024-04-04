import express from 'express'
import path from 'path'
const __dirname = path.resolve();
const app = express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    // res.render("index")
    res.render("index",{msg:"Hello World"})
    // res.sendFile("views/home.html",{root:__dirname})
})

app.get("/home",(req,res)=>{
    res.render("home")
    // res.render("index",{msg:"Hello World"})
    // res.sendFile("views/home.html",{root:__dirname})
})

app.listen(8080)