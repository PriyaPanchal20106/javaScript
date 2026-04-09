let modebtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currmode ="light" //then turns into dark 
modebtn.addEventListener("click", () =>{

    if(currmode === "light"){
        currmode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
       // document.querySelector("body").style.backgroundColor = "black"
    } else{
        currmode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
      //  document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(currmode)
    
})