let box = document.querySelector(".box")
box.addEventListener("mouseover",function(){
    box.style.backgroundcolor = "yellow"
    box.textContent = "mouse hover!"
})

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Hover me";
});

//This function use in object
const person = {
    firstname :"priya",
    lastname:"panchal",
    id:5566,

    getThis: function(){
        return this;
    }
    
}

 console.log(person.getThis())

const fullName = {
    firstname :"priya",
    lastname:"panchal",
    id:5566,

    getFullname: function(){
        return this.firstname +' '+this.lastname 

    }
    
}
console.log(person.getFullname())
 