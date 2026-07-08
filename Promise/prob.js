//learn how to solve the callback hell:

function getData (dataID){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("data",dataID)
            resolve("success")
        }, 3000);
    })
}

//promise chaining:
// let p1 = getData(1);

getData(1).then((value) =>{ //using function name to return the value
    return getData(2)
    //for another data value  
}).then((value) =>{
    console.log(value)
})

