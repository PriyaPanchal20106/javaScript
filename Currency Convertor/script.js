const apiKey = "05995531946cbcda2b7c5670";

const BASE_URL =  `https://v6.exchangerate-api.com/v6/${apiKey}`;



  const dropdown = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button")
  const fromcurr = document.querySelector(".from select")
  const tocurr = document.querySelector(".to select")
  const msg = document.querySelector(".msg");

//   for(codes in countryList){
//     console.log(codes,countryList[codes])
//   }


 for(let select of dropdown){
    for(currcode in countryList){
        let newOption =document.createElement("option")
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name === "from" && currcode === "USD"){
            newOption.selected = 'selected';
        }else if(select.name === "to" && currcode === "INR"){
            newOption.selected ="selected";
        }
        select.append(newOption)

    }
    select.addEventListener("change", (evt)=>{
     updateFlag(evt.target)
    })
 }
 const updateFlag = (element) =>{
    let currcode =element.value
   let countrycode = countryList[currcode]//IN,EU
   let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newsrc

 }
 //button 
  btn.addEventListener("click", async(evt) =>{
     evt.preventDefault();

     let amount = document.querySelector(".amount input")
     let amtval = amount.value;
    if(amtval == "" || amtval <1){
        amtval = 1;
        amount.value ="1";
        //const URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromcurr.value}`;

    }
    //console.log(fromcurr.value , tocurr.value)
   // const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
    // let response = await fetch(URL);
    // let data = await response.json();

    
    // console.log(data);


    const requestUrl = `${BASE_URL}/latest/${fromcurr.value}`;
console.log(requestUrl);

let response = await fetch(requestUrl);
let data = await response.json();

let rate = data[tocurr.value.toLowerCase()];

 let finalAmt = (amtval * rate);
 msg.innerText = `${amtval} ${fromcurr.value}  = ${finalAmt} ${tocurr.value}`
  })