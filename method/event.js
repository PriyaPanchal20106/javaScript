let btn = document.querySelector("#btn")
btn.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)}

let click = document.querySelector(".click")
click.addEventListener("click", () =>{
    console.log("you liked this post 1") 
});

//How to remove event handlers :


click.addEventListener("click", () =>{
    console.log("you liked this post 2") 
});

//store in some variable

const handler3 = () =>{
    console.log("you liked this post 3")
}


click.addEventListener("click",handler3 )
//then remove function:
click.removeEventListener("click",handler3)


click.addEventListener("click", () =>{
    console.log("you liked this post 4") 
});
