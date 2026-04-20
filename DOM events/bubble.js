let div = document.querySelector("div")
let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")

div.addEventListener("click",function(){
   
    console.log("div clicked")
})

ul.addEventListener("click",function(event){
    
    console.log("ul clicked")
    event.stopPropagation()
})

for(l of li){
    l.addEventListener("click",function(event){
       
        console.log("li clicked")
        event.stopPropagation()
    })
}