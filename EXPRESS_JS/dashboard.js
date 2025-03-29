let express= require('express')
let router=express.Router()

router.get('/',(req,res)=>{
    res.send("This is a Dashboard page ....")
})

module.exports=router