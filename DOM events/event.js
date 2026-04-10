//1.  event handler 
let btn = document.querySelector('button')
btn.onclick = function(){
    console.log('You liked this photo')
}

//2. Using a named function
function likePhoto(){
    console.log('You liked this photo')
}
btn.onclick = likePhoto  
 let btns = document.querySelectorAll('button')
 for(btn of btns){
    btn.onclick = sayhello 
 }
  function sayhello(){
    console.log("hello") 
  }
//On Mouse Enter
let btns1 = document.querySelectorAll('button')
 for(btn of btns1){
    btn.onmouseenter = MouseEnter
 }
 function MouseEnter(){
    console.log("you Entered into button")
 }

  
//in this call two function 
 let btnsf = document.querySelectorAll('button')
 for(btn of btnsf){
    btn.onclick = sayhello 
    btn.onclick = sayname//second function will override the first function
 }
  function sayhello(){
    console.log("hello") 
  }
  function sayname(){
   console.log("priya")
  }
addEventListener 

let btnsi = document.querySelectorAll('button')
 for(btn of btnsi){
    btn.onclick = sayhello 
    btn.onclick = sayname//second function will override the first function
 }
  function sayhello(){
    console.log("hello") 
  }
  function sayname(){
   console.log("priya")
  }

  let sel = document.querySelector(".add")
  sel.addEventListener("click" , function(){
   console.log("welcome")
  }) 
//next example:
   function sayhello(){
    console.log("hello") 
  }
  function sayname(){
   console.log("priya")
  }

  let button = document.querySelectorAll("button")
   for(btn of button){
      btn.addEventListener("click",sayhello) 
      btn.addEventListener("click",sayname)  

   }
