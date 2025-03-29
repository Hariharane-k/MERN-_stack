document.write("Variable declaration using var <br>")
var a=40
{
    const a=30
    document.write("Within the block a= ",a,"<br>")
}
document.write("Outside the block a= ",a,"<br>")
/* inside block let we can use const and let */

document.write("<br> Variable declaration using let <br>")
let b=3
{
    const b=7
    document.write("Within the block b= ",b,"<br>")
}
document.write("Outside the block b= ",b,"<br>")
/*inside block let we cant use var but can use const and let*/
document.write("<br> Variable declaration using const <br>")
const c=30
{
    let c=90
    document.write("Within the block c= ",c,"<br>")
}
document.write("Outside the block c= ",c,"<br>")
/*inside block let we cant use var but can use const and let*/

let t=3
t=80/*Accepted for var also but not in const*/
document.write(" t= ",t,"<br>")

/* Primitivr datatypes 
        String ,Number ,Boolean ,Undefined,Null
        */

let s="Hello JS!"
document.write("<br>String s = ",s,"<br>")
document.write("Type of s is ",typeof(s),"<br>")

let n=98
document.write("<br> Number n = ",n,"<br>")
document.write("Type of n is ",typeof(n),"<br>")

let f=89.9
document.write("<br>Number f = ",f,"<br>")
document.write("Type of f is ",typeof(f))

let bo=true
document.write("<br><br>Number bo = ",bo,"<br>")
document.write("Type of f is ",typeof(bo))

let nu=null
document.write("<br><br>Number nu = ",nu,"<br>")
document.write("Type of nu is ",typeof(nu))

let u
document.write("<br><br>Number u = ",u,"<br>")
document.write("Type of nu is ",typeof(u),"<br><br>")

/*Non primitive datatypes
    Object Array RegExp*/

let arr=[1,2,3,"Hello",9]
document.write("Array is ",arr,"<br>Type of arr is ",typeof(arr))
document.write("<br>Element present in the index 3 is ",arr[3])

let ar=[1,2,3,"Hello",9]
document.write("<br><br>Array is ",JSON.stringify(ar),"<br>Type of arr is ",typeof(ar))
document.write("<br>Element present in the index 8 is ",arr[8],"<br><br>")

let obj={1:"one",2:"two",3:"three","four":[1,2,3]}
document.write(JSON.stringify(obj),"<br>")
document.write(obj[2])
document.write("<br>",obj["four"])


/* operators*/
document.write("<br><br>Relational operators")
a=5
b='5'
document.write("<br>a == b is ",a==b)   //true checks only the values
a=5
b='5'
document.write("<br><br>a === b is ",a===b)   //checks both the value and the datatype
a=5
b='5'
document.write("<br><br>a != b is ",a!=b)   //false checks only the values
a=5
b='5'
document.write("<br><br>a !== b is ",a!==b)  //checks both the value and the datatype

document.write("<br><br>Bitwise operators")
a=5
b=9
document.write("<br>a=5 && b=9 is ",a && b)
a=5//101
b=4//100
document.write("<br>a=5 & b=4 is ",a & b)//100
a=5//101
b=4//100
document.write("<br>a=5 ^ b=4 is ",a ^ b)//001
a1=-4
document.write("<br><br>Ones complement :~a1 is ",~a1)
/*
num=4 
positive - ones complement
8 bit 
0000 100

one complement 
1111 1011
2's combination 
-128+64+32+16+8+2+1
Ans :-5*/
document.write("<br><br>Conditional statement ")
document.write("5<6 ? is ",5<6? true:false,"<br><br>")

a=2,4,5
document.write(a)
document.write("<br>")
a=(2,4,5)
document.write(a)
document.write("<br>")
a=(s=3,t=6,s+t)
document.write(a)

document.write("<br>")
document.write("<br>")
/*
p=Number(prompt("Enter the cost of apple:"))
o=Number(prompt("Enter the cost of orange:"))
m=Number(prompt("Enter the cost of mango:"))
if (p+o+m > 100){
    document.write("Can by the Fruits,cost is ",o+p+m)
}
else{
    document.write("Cannot buy the Fruits")
}*/
/*
document.write("<br>")
amt=Number(prompt("Enter the total cost of an products:"))
if(amt<=1000){
    document.write("<br>Sorry no Discount available for u r purchase!!")
}
else if(amt>=1000 && amt<=3000){
    dis=amt-((10/100)*amt)
    document.write("<br>U r eligible for an 10 % Discount on u  r purchase and the total amount is ",dis)
}
else if(amt>=3000 && amt<=5000){
    dis=amt-((30/100)*amt)
    document.write("<br>U r eligible for an 30 % Discount on u  r purchase and the total amount is ",dis)
}
else if(amt>=5000){
    dis=amt-((35/100)*amt)
    document.write("<br>U r eligible for an 35 % Discount on u  r purchase and the total amount is ",dis)
}*/

/*
document.write("<br>")
ar=["RED","YELLOW","GREEN"]
co=prompt("Enter the color signal:").toLowerCase()
if (co=="red"){
    document.write("Stop!!!!")
}
else if (co=="yellow"){
    document.write("WAIT!!!!")
}
else if (co=="green"){
    document.write("Can GO!!!!")
}
else{
    document.write("Invalid color")
}
    */

/*
cb=Number(prompt("Enter the Current Balance:"))
wa=Number(prompt("Enter the amount to withdraw amount:"))
if ((cb-500)>=500 && wa<=cb){
    balance=cb-wa
    document.write("Amount Debited Succesfully!!<br>")
    document.write("Current Balance after the withdrawal of amount is :",balance,"<br>")
}
else{
    document.write("Minimum balance not met withdraw not possible<br>")
}
    */
   /*
num =Number(prompt("Enter the number:"))
switch(num%2){
    case 0:
        document.write("<br>Number is an even number")
        break
    case 1:
        document.write("<br>Number is an odd number")
}

*/

for(i=110;i>=101;i--){
    document.write("Room Number: ",i,"<br>")
}
document.write("<br>")
for(i=1;i<=10;i++){
    document.write(((-1)**(1+i))*i+" ")
    //Math.pow(-1,i+1)*i
}
document.write("<br>")
document.write("<br>")
s="HARIHARANE"
i=0
document.write("Length of the String is: ",s.length,"<br>")
while(i < s.length){
    document.write(s[i],"   ")
    i++
}
document.write("<br>")
s="HARIHARANE"
i=s.length - 1
ind=0
while(i >= ind){
    document.write(s[i],"   ")
    i--
}
document.write("<br>")

l="PSNA COLLEGE OF ENGNINEERING AND TECHNOLOGY"
len=l.length
i=0
while(i<len){
    if (i%2!=0){
        document.write(l[i],"       ")
    }
    i++
}


document.write("<br>")
i=0
do{
    document.write(i)
    i++
}while(i>10);

document.write("<br>")
document.write("<br>")

o="RAMA KRISHNA"
for (i in o){
    if (o[i]==" "){
        document.write("<br>")
    }
    else{
        document.write(o[i])
    }
}

document.write("<br>")

// num=Number(prompt("Enter the number"))
// z=1
// for (i=2;i<num;i++){
//     if(num%i==0){
//         z=0
//         break
//     }
// }
// if(z){
//     document.write("<br>",num," is  a prime number")
// }
// else{
//     document.write("<br>",num," is not a prime number")
// }


// //USING CONTINUE

// num=Number(prompt("Enter the number"))
// z=1
// for (i=2;i<num;i++){
//     if(num%i!=0){
//         continue
//     }
//     z=0
// }
// if(z){
//     document.write("<br>",num," is  a prime number")
// }
// else{
//     document.write("<br>",num," is not a prime number")
// }


document.write("<br>")
//Functions

// function display(str){
//     document.write("THIS IS A FUNCTION BLOCK ","<br>")
//     document.write("Hello "+str)
// }
// str=prompt("Enter the name :")
// display(str)
// document.write("<br>")
// function sum(a,b){
//     return a+b
// }
// a1=Number(prompt("Enter the Num 1 value :"))
// b1=Number(prompt("Enter the Num 2 value :"))
// ad=sum(a1,b1)
// document.write("Addition of ",a1," and ",b1,"is :",ad)

document.write("<br>")
function bgc(){
    c=document.getElementById("tx")
    document.body.style.backgroundColor = c.value
}