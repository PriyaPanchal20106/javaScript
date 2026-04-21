// function hello()
// {
//     console.log("inside hello")
//     console.log("hello")
// }
// function demo(){
//     console.log("calling hello")
//     hello()
// }

// console.log("calling demo")
// demo()
// console.log("Done!Bye")
// */
// function one()
// {
    
//     return 1;
// }
// function two()

// {
//     return one()+one()
// }
// function three()
// {
//     let sum = two() + one()
//     console.log(sum)
// }
// console.log("calling function three")
// three() 

let h1 = document.querySelector("h1")
function colorchange(color,delay,nextchange)
{
    setTimeout(() => {
        h1.style.color = color
        if (nextchange)
        {
            nextchange()
        }
    }, delay);

}
 colorchange("red",2000, () => 
{
     colorchange("blue",2000, () =>
    {
            colorchange("green",2000, () =>
            {
                colorchange("orange",2000,)
            })
    })
})                


