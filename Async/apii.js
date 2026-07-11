// get data to send API call

// let p = fetch('https://jsonplaceholder.typicode.com/posts')


// p.then((value1) =>{
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })

//HERE TWO MATHODS TO GET DATA FROM API CALL
const url = "https://jsonplaceholder.typicode.com/posts";



const getData = async () => {
     console.log("fetching data...")
    let response = await fetch (url);
    console.log(response);

    let data = await response.json();
    console.log(data[0].title);    
}