
function onclickHandler(){
  document.getElementById("demo").innerText="Hariharane"
}
/*SIgnal */
function sig(){
  tec=document.getElementById("txt").value
  let sc=tec.toUpperCase()
  if(sc =="RED"){
      document.getElementById("signal").innerText="!!!!STOP!!!!!"
      document.getElementById("signal").style.backgroundColor="red"
      document.getElementById("signal").style.color="white"
  }
  else if(sc =="YELLOW"){
      document.getElementById("signal").innerText="!!!!WAIT!!!!!"
      document.getElementById("signal").style.backgroundColor="orange"
      document.getElementById("signal").style.color="white"
  }
  else if(sc =="GREEN"){
      document.getElementById("signal").innerText="!!!!GOO!!!!!"
      document.getElementById("signal").style.backgroundColor="green"
      document.getElementById("signal").style.color="white"
  }
  else {
      document.getElementById("signal").innerText="!!!!INVALID!!!!!"
      document.getElementById("signal").style.backgroundColor="white"
      document.getElementById("signal").style.color="black"
  }
}

function generateOTP(){
    let para=document.getElementById('op')
    let otp = parseInt(Math.random()*10000)
    s=String(otp)
    len=s.length
    if (len==1){
        s="000".concat(s)
    }
    else if(len==2){
        s="00".concat(s)
    }
    else if(len==3){
        s='0'.concat(s)
    }

    else{
        para.innerText=otp
    }
    para.innerText=s
}

function backchange(length) {
    const chars = "ABCDEF0123456789";
    let result = "#";
    for (i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  function change(){
    hexacode=backchange(6)
    code=document.getElementById("bc")
    code.innerText=hexacode
    document.getElementById("body").style.backgroundColor=hexacode
  }
  
  function ADDITION(){
    n1=document.getElementById("num1").value
    n2=document.getElementById("num2").value
    c=Number(n1)+Number(n2)
    document.getElementById("sum").innerText="RESULT: "+c

    
  }
document.write("SUM OF AN ARRARY USING NONYMOUS FUNCTION <br><br>")
  sum_of_array=(...arg)=>{
    document.write(JSON.stringify(arg),"<br>")
    s=0
    for(i of arg){
      s=s+i
    }
    document.write(s,"<br>")
  }

  sum_of_array(1)
  sum_of_array(1,2,3,6)
  sum_of_array(9,67,4,65,8)

  document.write("<br>")
  
  document.write("OBJECT CONSTRUCTOR<br>")
  let obj={
    Fname:"Hari",
    Lname:"Harane",
    Fullname:function(){
      return this.Fname+" "+this.Lname
    }
  }

  document.write(obj.Fname,"<br>")
  document.write(obj.Lname,"<br>")
  document.write(obj.Fullname(),"<br>")

  
  document.write("<br>ADDITION OF 2 NO's using constructor<br>")
  let sum={
    n:23,
    m:90,
    add:function(){
      return this.n+this.m
    }
  }

  document.write(sum.n,"<br>")
  document.write(sum.m,"<br>")
  document.write(sum.add(),"<br>")

  
  document.write("Function constructor model<br>")
  function add(n,m){
    this.n1=n;
    this.m1=m;
  }

  const object=new add(5,6)
  
  document.write(object.n1+object.m1,"<br>")

  document.write("<br>")
let arr1=[1,2,3,4,5]
let arr2=[10,20,30,40]
let res=[...arr1,...arr2]

document.write(JSON.stringify(res),"<br>")
let dic={1:"one",2:"Two"}
let dict1={3:'three',4:'four'}
let dictres={...dict1,...dic}
document.write(JSON.stringify(dictres),"<br>")


function selectradio(){
  let sel=document.querySelector('input[name="gender"]:checked')
  let result=document.getElementById('result')
  if(sel){
    result.innerText="Selected Gender is:"+sel.value
  }
  else{
    result.textContent="Choose the option!!!"
  }
}

function Verifyanswer(){
  let sel=document.querySelector('input[name="g"]:checked')
  let result=document.getElementById('Ans')
  if(sel.value =="JAVA"){
    result.textContent="Correct"
    result.style.color="white"
    query.style.backgroundColor="green"
  }
  else{
    result.textContent="Wrong Choose the correct option!!!"
    result.style.color="white"
    query.style.backgroundColor="red"
  }
}

function selectedbox(){
  let sel=document.querySelectorAll('input[name="skill"]:checked')//Multiple selection so queryselectorAll
  let r=document.getElementById('resr')
  let selected=[...sel].map(item=>item.value)
  r.innerText=selected.length>0 ?"Selected Skills are "+selected.join(', '):"Not Selected";

}

function selectoption(){
  let sel11=document.getElementById("List")
  let r11=document.getElementById("rese12")
  r11.innerText="Selected cars are  "+sel11.value
}
function Verifypass() {
  let passw = document.getElementById('pas').value;
  let e = document.getElementById('pass');
  let hasUpperCase = /[A-Z]/.test(passw);
  let hasLowerCase = /[a-z]/.test(passw);
  let hasDigit = /\d/.test(passw);
  let hasSpecialChar = /[!@#$%^&*()_+{}:">?<,./;'[\]=-]/.test(passw);
  let hasSpace = /\s/.test(passw);

  if (passw.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && !hasSpace) {
      e.innerText = `Your password is valid and strong --- Password: ${passw}`;
  } 
  else {
      e.innerText = "Invalid password. Ensure it has at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character, with no spaces.";
  }
}
