let btn =document.querySelector("button")
let ul = document.querySelector("ul")
let input = document.querySelector("input")

btn.addEventListener("click",function()
{
    let item = document.createElement("li")
    item.innerText =input.value
    ul.appendChild(item)
  let delbtn = document.createElement("button")
  delbtn.innerText = "delete"
  delbtn.classList.add("del")
  item.appendChild(delbtn)
 
  input.value ="";

 let alldel = document.querySelectorAll(".del")
 for(del of alldel){
    del.addEventListener("click",function()
    {
      let par = this.parentElement
       console.dir(par)
       par.remove() 
    })
 }

})
