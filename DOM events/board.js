//keydown event:
let keydown = document.addEventListener("keydown", function(event){
    const keyName = event.key

 if(keyName =="Control"){
    return;
 }
  if (event.ctrlKey){
    alert(`Combination of ctrlKey + ${keyName}`)
  } else {
    alert(`key pressed ${keyName}`)
  }
})

//keyup event:
let keyup = document.addEventListener("keyup",function(event){
    const key = event.code

    if(key =="Control"){
        alert(`Key realesed ${key}`)
    }
})