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
  
  
