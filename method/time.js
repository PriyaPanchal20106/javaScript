document.write("Hello")

 let a =setTimeout(() => {

    alert("I am inside the block")
}, 2000);

let b = prompt("Do you want clear tiomeout?")
if("no" == b){
    clearTimeout(a)
}
console.log(a)