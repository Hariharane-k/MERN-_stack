// let http =require('http')

// let host='127.0.0.1'
// let port=4000     ///dont use below 3000 and 8080  port numbers


// let x="Hello NODE JS PROGRAMER"
// rev=''
// for(i of x){
//     rev=i+rev
// }

// let x=987  ///browser dos not accept the direct nmber produces an error to produce convert the number into string

// let server=http.createServer((request,response)=>{  //// dont use (response,request)
//     response.writeHead(200);
//     response.write(String(x)) //converting number into string
//     response.end()
// })


//  changing accoss the browser 
// let server=http.createServer((request,response)=>{  //// dont use (response,request)
//     if(request.url=='/'){
//         response.writeHead(200)
//         response.write("Welcom  to the MainPage")
//         response.end()
//     }
//     else if(request.url=='/about'){
//         response.writeHead(200)
//         response.write("Welcom  to the AboutPage")
//         response.end()
//     }
//     else if(request.url=='/dashboard'){
//         response.writeHead(200)
//         response.write("Welcom  to the Dashboard")
//         response.end()
//     }
//     else{
//         response.writeHead(404)
//         response.write("404  Error Page Not Found")
//         response.end()
//     }
// })

// server.listen(port,host,()=>{//callback method
//     console.log("Sever run on HTTP://"+host+":"+port);
// })


// Local Module

let local=require('./local')
let x=local.add(3,7)
let y=local.sub(8,3)
let z=local.mul(7,2)
let http=require('http')

http.createServer((re,res)=>{
    res.write("Sum of two numbers is:"+String(x)+"\n")
    res.write("Difference of two numbers is:"+String(y)+"\n")
    res.write("Multipl\ication of two numbers is:"+String(z)+"\n")
    res.end()
}).listen(4000,'127.0.0.1',()=>{
    console.log("Sever is running on HTTP://127.0.0.1:4000")
})
console.log(x)