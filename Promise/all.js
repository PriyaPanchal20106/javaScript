let p1 = new Promise((resolve , reject) => {
    setTimeout(() => {

        resolve("value1");
        
    }, 1000);
})
let p2 = new Promise((resolve , reject) => {
    setTimeout(() => {

        resolve("value2");
        
    }, 2000);
})
let p3 = new Promise((resolve , reject) => {
    setTimeout(() => {

        resolve("value3");
        
    }, 3000);
})

//Promise methods:1.all
let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value) => {
    console.log(value);
})

//2.Promise.allSettled(promise)

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value4")
        
    }, 5000);
})
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("value5")
        
    }, 6000);
})
//the syntax of method
 let total_promise = Promise.allSettled([p4,p5])
 total_promise.then((value) => {
    console.log(value)
 })

 //3.