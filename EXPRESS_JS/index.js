let express=require('express')
const products = require('./data')
let app = express()


// let local=require('./local')
// let db=require('./dashboard')

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

// app.get('/',(req,res)=>{
//     res.send("Addition of Two numbers is :"+String(local.add(99,8))
//     +"<br>Subtraction of Two numbers is :"+String(local.sub(99,8))
//     +"<br>Multiplication of Two numbers is :"+String(local.mul(9,8))
//     +"<br>Reversing of string Hello World:"+String(local.Reverse("Hello World")))
// })

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })

// app.use("/loc",local)
// app.use("/dashboard",db)



// //Retrieve using the id eg(/1 or /2 or /3)
// app.get('/',(req,res)=>{
//     res.json(products)
// })

// app.get('/:pid',(req,res)=>{
//     let pid = Number(req.params.pid)
//     let prod = products.find((items)=>items.pid == pid)
//     res.send(prod)
// })

// //Retrieve using the products name eg(/1 or /2 or /3)
// app.get('/:pname',(req,res)=>{
//     let pname = req.params.pname
//     let prod = products.find((items)=>items.pname == pname)
//     res.send(prod)
// })

app.get('/',(req,res)=>{
    res.json(req.query)
})

app.listen(4500,'127.0.0.1',()=>{
    console.log("Server run on HTTP://127.0.0.1:4500")
})