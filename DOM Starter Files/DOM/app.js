console.log(document.getElementById("img"))
//access element by id
let paraobj = document.getElementById("para")
 console.dir(paraobj.innerText)
//access element by class
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

