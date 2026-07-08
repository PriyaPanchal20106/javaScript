//TO USE OF ASYNC AWAIT FUNCTION

// function api(){
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//         console.log("weather data")
//         resolve(200)
//          }, 3000);
//     });
    
// }

// async function getweatherData() {
//     await api()//1st call
//     await api()//2nd call
    
// }

function getData (dataID){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("data",dataID)
            resolve("success")
        }, 3000);
    })
}

//APPLY ASYNC AWAIT IN THIS:
async function getallData() { //ama apde function ne first call karvo pade then e execute kare 
    await getData(1);
    await getData(2);
    
}

//we solve this problem, DIRECT FUNCTION EXECUTE:

(async function()  { 
    await getData(1);
    await getData(2);
    
}) ();//IIFE (immedietly invoked function expression)