// function countdown(x){
//     if(x==0){
//         return 0
//     }
//     else{
//         confirm.log(x)
//         return setTimeout(()=>countdown(--x),2000)
//     }
// }
// countdown(19)


let  to = require('to-case')

let x = to.upper('hello')
console.log(x)
let y = to.lower(x)
console.log(y)