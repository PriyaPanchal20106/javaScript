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
//Manupulating Attributes:
let img2 = document.querySelector("#img")
 img2 =img2.getAttribute('src')
 console.dir(img2) 

//Manupulating Style:
 
let head = document.querySelector("h1")
 console.dir(head.style.backgroundColor = '') 

 let links =document.querySelectorAll("div a ")
  console.dir(links )
  for (links of links){
    console.dir(links.style.Color = '') 
  }
//classlist:
    let sel = document.querySelector('h1')
    console.dir(sel.classList)
//to make class with using js
 let doc = document.querySelector('h1')
  console.dir(doc.classList.add('green'))
  console.dir(doc.classList.remove('green'))
  console.dir(doc.classList.contains('green'))//if class present than give true otherwise give false
  console.dir(doc.classList.contains('abc')) 
//toggle method:
let dot = document.querySelector('h1')
  console.dir(doc.classList.add('green'))
  console.dir(dot.classList.toggle('green'))//if class is not present than add the class and if class is present than remove the class
   console.dir(doc.classList.remove('green'))
    console.dir(dot.classList.toggle('green')) 
//set the pubinfo gray to yellow
let pub = document.querySelector('.pubInfo')
    console.dir(pub.classList.add("yellow")) 
  

//Navigation on page:
//1.children:
let root = document.querySelector('.container')
 console.dir(root.children)
 //2.Parent element:
 let parentEle = document.querySelector('h1')
  console.dir(parentEle.parentElement)
//3.siblings:
let sib = document.querySelector('h2')
 console.dir(sib.previousSibling)

 //Adding Element:
 let newp = document.createElement('p')
 console.dir(newp) 
 newp.innerText = 'Hi I am para'
 console.dir(newp)
//here use appendchild property to apply at document
 let any = document.querySelector('body')
  any.appendChild(newp)
  
//create new para and add that
  let para = document.createElement('p')
  console.dir(para)
  para.innerText = 'I am new para'
  console.dir(para)
  let lorem = document.querySelector('body')
  lorem.appendChild(para)
  console.dir(lorem) 
//create button and apply at the pubInfo class:
  // let btn = document.createElement('button')
  // btn.innerHTML = ' click Me! '
  // console.dir(btn)

  // let final = document.querySelector('.pubInfo')
  // final.appendChild(btn) //append method is used to below the block
  // console.dir(final)
  // let btn = document.createElement('button')
  // btn.innerHTML = ' click Me! '
  // console.dir(btn)

  // let final = document.querySelector('.pubInfo')
  // final.prepend(btn)
  // console.dir(final)//prepend is used to button place at top in the block

//insert adjacent method:
//1.beforebegin
// let btn1 = document.createElement('button')
//   btn.innerHTML = ' Before begin! '
//   console.dir(btn1)

//   let final1 = document.querySelector('.pubInfo')
//   final.insertAdjacentElement("beforebegin",btn1)
//   console.dir(final1)
//2.after begin:
let btn2 = document.createElement('button')
  btn2.innerHTML = ' after begin! '
  
  let final2 = document.querySelector('.pubInfo')
  final2.insertAdjacentElement("afterbegin",btn2)
  console.dir(final2)

//Remove method:
// let info = document.querySelector('body')
// console.dir(info.remove()) //remove the whole body 



  
 

 
  
   
  



  

