let form = document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault()

    let user = document.querySelector("#user")
let pass = document.querySelector("#pass")
 console.dir(user.value)
 console.dir(pass.value)

alert(`Hii!  ${user.value}  "your password is "  ${pass.value}`)    
})
