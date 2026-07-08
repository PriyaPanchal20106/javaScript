//how to get data asynchronous
//** ASYNCHRONOUS PROGRAMMING :

function getData(dataID,getNextdata){
    setTimeout(() => {
        console.log("data",dataID)
        if(getNextdata){
               getNextdata();
        }
        
    }, 2000);
}
//i want data with the time difference 2s 
  //data 1
  //data 2
  //data 3


//call back hell:
getData (1 ,() => {
    getData(2, ()=>{
        getData(3,()=>{
            getData(4)
        })
    })
})


