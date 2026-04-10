let h3 = document.querySelector("h2")
let generateColor = document.querySelector("button");
let box = document.querySelector(".box");
generateColor.addEventListener("click", function(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    box.style.backgroundColor = color; 
    h3.innerText = color;  
}); 
 