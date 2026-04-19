let p1 = new Promise((resolve,reject) => {
    console.log("promise is pending")

    setTimeout(() => {

        console.log("promise is resolved")
        resolve(true)
        
    }, 4000);
})
let p2 = new Promise((resolve,reject) => {
    console.log("promise is pending")

    setTimeout(() => {

        console.log("promise is rejected")
        reject(new Error("I am reject"))
        
    }, 4000);
})
console.log(p1,p2)

let promise = new Promise(resolve => {
    setTimeout(() => resolve("done"), 5000);
})
promise.then() //alert in this