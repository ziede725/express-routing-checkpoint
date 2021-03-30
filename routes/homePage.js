const router = require("express").Router() ; 

router.get("",(req,res)=>{
    res.send("<h1>home hello </h1>")
})
module.exports= router ; 