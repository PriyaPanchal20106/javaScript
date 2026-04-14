// let para= document.querySelector("p")
// para.addEventListener("click",function (){
//     console.log("para was clicked")
// })  

// let box = document.querySelector(".box")
// box.addEventListener("mouseenter",function(){
//     console.log("you entered in box")
// }) 
let over = document.querySelector(".box")
over.addEventListener("mouseover",function(){
    console.log("you entered in box")
}) 

//This in Event Listener

let btn = document.querySelector("button")
btn.addEventListener("click",function(){
    console.log(this)
    console.log(this.innerText)
})

 let h1 = document.querySelector("h1")
// h1.addEventListener("click",function(){
//     console.log(this.innerText)
//     this.style.color = 'blue'
// })
 let h3 = document.querySelector("h3")
// h3.addEventListener("click",function(){
//     console.log(this.innerText)
//     this.style.color = 'Green'
// })
// let para = document.querySelector(".para")
// para.addEventListener("click",function(){
//     console.log(this.innerText)
//     this.style.color = 'red'
// }) 

function changecolor(){
    console.log(this.innerText)
    this.style.color='blue'
}
h1.addEventListener("click",changecolor)
h3.addEventListener("click",changecolor)

let button = document.querySelector(".btn")
let head = document.querySelector("h1")
let h31 = document.querySelector("h3")
let p = document.querySelector("p")
button.addEventListener("click",color)
 function color(){
    head.style.color='blue'
    h31.style.color='green'
    p.style.color ='red'
 }

