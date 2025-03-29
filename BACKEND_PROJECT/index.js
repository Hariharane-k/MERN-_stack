let express = require('express')
let mongoose = require('mongoose')

let app = express()

const uri = 'mongodb://127.0.0.1:27017'

mongoose.connect(uri,{dbName:'CSE'}).then(()=>{
    console.log("Mongodb Connected Successfully....")
}).catch((error)=>{
    console.error('Error Message',error.message)
})

const UserSchema = new mongoose.Schema({
    user:String
})

const User = mongoose.model('rawdata',UserSchema,'rawdata')

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit',async(req,res)=>{
    const name = req.body
    await User.insertOne(name)
    res.send("Data Stored Successfully....!")
})

app.get('/all',async(req,res)=>{
    let docs =await User.find()
    res.send(docs)
})

app.put('/update',async(req,res)=>{
    let sel={"user":"Hariharane"}
    let updateData={"$set":{"user":"Hari"}}
    await User.updateOne(sel,updateData)
    res.send("Updated the document....!")
})

app.delete('/delete',async(req,res)=>{
    let sel={"user":"Arun"}
    await User.deleteMany(sel)
    res.send("Deleted the document....!")
})
app.listen(5000,()=>{
    console.log("Server is running on http://127.0.0.1:5000")
})