const express = require("express")
const app = express()
app.disable('x-powered-by')
app.use(express.static(__dirname+'/public'))
const usersModel = require('./model/usersModel')
const db = require('./db/db')
app.use(express.urlencoded({extended:true}))
db(success:()=>{
    app.get('/login',(req,res)=>{
        res.sendFile(__dirname+'/public/login.html')
    })
    app.get('/register',(req,res)=>{
        res.sendFile(__dirname+'/public/register.html')
    })
    app.listen(3000,(err)=>{
        if(!err) console.log("ok")
        else console.log(err)
    })
},failed(err)=>{
    console.log(err)
})