 //Selecting element:
 console.log(document.getElementById("img"))
//1.access element by id
let paraobj = document.getElementById("para")
 console.dir(paraobj.innerText)
//2.access element by class
let imgobj = document.getElementsByClassName("oldimg")
console.dir(imgobj)
 //print the images
for( let i=0;i<imgobj.length;i++){
    console.dir(imgobj[i])
}
//replace the images with the main image(spider man)
for( let i=0;i<imgobj.length;i++){
    console.dir(imgobj[i]. src ="./Assets/Spider-Man.png" )
}
//3.ACcess the element by using Tagname
let paraobj1 = document.getElementsByTagName('p')
console.dir(paraobj1)

//Query selector 
//1.Tagname:
 let p2 =document.querySelector("p")
 console.dir(p2)
  
//access all element of  para
let p = document.querySelectorAll("p")
 console.dir(p)
//2.idname:
let h1 = document.querySelector( "#head")
 console.dir(h1.innerText) 
//3.Classname:
let img = document.querySelector(".oldimg")
console.dir(img.alt)//only access the first element 
//access the div element:
let img1 = document.querySelectorAll("div a")
console.dir(img1)

//properties and Methods:

//1.innerText:in this only element as it is print in this 
let p1 =document.querySelector("p") 
console.dir(p1.innerText)

//2.innerHTML:in this all element are printed with the tag
let p4 =document.querySelector("p") 
  console.dir(p4.innerHTML)
//underline the heading:
   let tr = document.querySelector("#head")//in this also use the tagname to access the element
 console.dir( tr.innerHTML = "<u>spider man</u>")
//3.textContent:in this the output is print  same as we write the code
let p3 =document.querySelector("p") 
  console.dir(p3.textContent)

 
  
   
  



  

