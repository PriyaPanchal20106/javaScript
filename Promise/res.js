//LEARN HOW PROMISE RESOLVE WITH USING .THEN()

const getPromise = () =>{
    return new Promise((resolve , reject) =>{
        console.log("I am Promise")
        resolve("sucess")
    });

}
 let promise = getPromise();
 promise.then((value) =>{
    console.log("Promise fulfilled " ,value)
    })


//LEARN HOW PROMISE REJECT WITH USING .CATCH()

const getPromise2 = () =>{
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("I am Promise")
             reject("Network error")
            
        },5000);
        
    });

}
 let promise2 = getPromise2();
 promise2.catch((value) =>{
    console.log("Promise rejected " ,value)
 })

 