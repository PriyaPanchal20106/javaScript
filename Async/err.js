//learn how to built error 

try {

    let age = prompt("Enter your age")
    age = Number.parseInt(age)

    if(age>120){
        throw new ReferenceError("this is probably not true")
    }

    

}catch(error){
    console.log(error.name)//it gives name of the error 
    console.log(error.message)//problem why error is throw

}
console.log("This script is still running")