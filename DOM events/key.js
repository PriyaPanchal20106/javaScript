//event type :
// let btn = document.querySelector("button")
// btn.addEventListener("click",function(e){
//     console.log("button clicked")
//     console.log(e)
// })

//Keyboard event:
// let input = document.querySelector("input")
// input.addEventListener("keyup",function(event){ //in this keydown is also used.
//     console.log(event.key) //to know which key is pressed
//     console.log(event.code) //to know the code of the key
//     console.log("key was pressed!")
//     console.log(event.type)
// })
//create program to character moves on the screen using arrow keys 
  let character = document.querySelector(".character")
    character.addEventListener("keyup",function(event){
    //     if(event.code === "ArrowUp"){
    //         console.log(" character move up")
    //     }
    //      else if (event.code === "ArrowDown"){
    //         console.log(" character move down")
    //      }
    //      if(event.code === "ArrowLeft"){
    //         console.log(" character move left")
    //      }
    //      else if (event.code === "ArrowRight"){
    //         console.log(" character move right")
    //      }
    // })

    //with using key :
        if(event.code === "KeyU"){
            console.log(" character move up")
        }
         else if (event.code === "KeyD"){
            console.log(" character move down")
         }
         if(event.code === "KeyL"){
            console.log(" character move left")
         }
         else if (event.code === "KeyR"){
            console.log(" character move right")
         }
    })


   
