 let promise = new Promise(function(resolve,reject){
    alert("hello I am ")
    resolve(56)

 })
console.log("hello")
setTimeout(function(){
    console.log("hello 2nd")
},2000)

console.log("my name is hello three")
console.log(promise)