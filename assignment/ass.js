
//Q.1:<p> with red text that says "I am red"

   let red = document.createElement('p')//first to create para 
    red.innerHTML = "I am red"
    red.classList.add("red")//then add class in this

    let redobj = document.querySelector('body')
    redobj.append(red)//for desplay on document  
    

//Q.2:<h3>with blue color style 'hey I am h3'
      let blue = document.createElement('h3')//first to create para 
    blue.innerHTML = "I am h3"
    blue.classList.add("blue")//then add class in this

    let blueobj = document.querySelector('body')
    blueobj.append(blue)//for desplay on document

//Q.3: <div> with black border and pink background color with inside 
    //<h1>"Hi I am inside"
    //<p> "Me too"

    let h1 = document.createElement('h1')
    h1.innerText="Hi I am inside"//first to create h1 and add text in this
    
    let para = document.createElement('p')
    para.innerText = "Me too!"//then to create para and add text in this
   
 //then create div and add class in this and append h1 and para in this
    let newobj = document.createElement('div')
    newobj.classList.add('div')
    newobj.appendChild(h1)
    newobj.appendChild(para)
   //then apply at document
    let body = document.querySelector('body')
    body.appendChild(newobj)
    
    



