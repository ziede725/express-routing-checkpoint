const express = require("express") ;
const path = require("path") ;  
const app = express() ; 
const router = express.Router() ; 
const home = require("./routes/homePage")
const service = require('./routes/service')
const date = new Date() ;

app.set('html',path.join(__dirname, 'html'))
app.set("view engine",'pug') ;
const hour = date.toTimeString().substring(0,2)
console.log(hour) 

if (date.getDay()!==6 && date.getDay()!== 0 && hour<17 && hour>9)
{
    app.get('/',(req,res)=>{
        res.render('index') 
    })
    app.get('/services',(req,res)=>{
        res.render('service')
    })
    app.get('/contact', (req,res)=>{
        res.render('contact')
    })
    
    app.listen(3000,()=>{
        console.log("server is running") ; 
    }) ; 
} 
else{
    app.get('/',(req,res)=>{
        res.render('work')
    })
    app.listen(3000,()=>{
        console.log("server doesn't run on this time ")
    })
}

