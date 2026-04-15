let form = document.querySelector("form")
form.addEventListener("submit",function(event){
     console.log(event)
    event.preventDefault()//to prevent the form 
   
//  console.log("form submit")
}) 
//Extracting form data:
let input = document.querySelector("input")

console.dir(input)
