// add=(a,b)=> a+b
// sub=(a,b)=> a-b
// mul=(a,b)=>a*b


// Reverse=(text)=>{
//     rev=""
//     for(i of text)
//         rev=i+rev
//     return rev
// }
// module.exports={add,sub,mul,Reverse}

let express= require('express')
let router=express.Router()

router.get('/',(req,res)=>{
    res.send("This is a local page ....")
})

module.exports=router