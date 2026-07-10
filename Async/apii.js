// get data to send API call

// let p = fetch('https://jsonplaceholder.typicode.com/posts')


// p.then((value1) =>{
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })

const url = "https://jsonplaceholder.typicode.com/posts";

let promise = fetch (url);
console.log(promise);