//FUNCTIONS:method 1:without argument
     function greet(){
        console.log("welcome")
     }
        greet()
//FUNCTIONS:method 2:with argument
        function greet(name){
            console.log("welcome "+name)
         }
            greet("Priya")
//FUNCTIONS:method 3:addition of two numbers
          function add(a,b){
            console.log("The sum is " + (a+b))
          }
           add(5,10)
//FUNCTIONS:method 4:return keyword
         function add(a,b){
            return a+b
          }
              let sum=add(5,10)
                console.log("The sum is " + sum)
//function with using const 
    const add1 = function(a,b){
        return a+b
    }
    console.log(add1(5,10))
//create a function 1 to 6 random number
function randomNumber(){
      return Math.floor(Math.random()*6)+1
}
console.log(randomNumber())
//create a function of 1 to 10 and add the numbers
function addNumbers(){
      let sum = 0
   for(let i=1; i<=10; i++){
      sum += i
   }
   return sum
}
console.log(addNumbers())
//create a function to the person is eligible to vote or not
  function vote(age){
   if(age>=18){
      return "You are eligible to vote"
   }
   else{
      return "You are not eligible to vote"
   }

  }
   console.log(vote(20)) 
//Function with multiple parameters 
 function printInfo(name,age)
 {
   console.log(` ${name} age is ${age}`) 
 }
   printInfo("Priya",25)
//create a function to print the multiplication table of given number
     function multiplicationTable(num){ 
       for(let i=1; i<=10; i++){
         console.log(`${num} x ${i} = ${num*i}`)
       }
     }
       multiplicationTable(5)
         
//scope of variable in function 
  //1.function scope 
   function getsum(a,b)
   {
      let sum = a+b
      return sum
   }
    getsum(5,10)
    console.log(sum) //error: sum is not defined 
   //2.Global scope 
    let sum1 =60
     function calsum(a,b)
     {
      let sum1 = a + b
      console.log(sum1)
     }
      calsum(5,10) //15
      console.log(sum1) //60
   //3.block scope:it is defined within a block and can only be accessed within that block 
    {
      let a=10
    }
       console.log(a) //error: a is not defined
    {
      const a=10
    }
       console.log(a) //error: a is not defined 
    {
      var a=10
    }
       console.log(a) //10:var is function scope not block scope

       var name = "Priya"
        var  name = "Anu"
         console.log(name) //Anu:var can be redeclared and updated
          
         for(let i=0; i<5; i++){
            console.log(i)
         }
           // console.log(i) //error: i is not defined:let is block scope
   //4.Lexical scope:it is defined within a function and can access variables from its parent function 
    function outer(){
      let x = 10;
      let y = 20;
      function inner(){  
         console.log(x) //10
      }
      inner()
    }
    outer()
    //another way of lexical scope
    function outer(){
      
      function inner(){  
         console.log(x) //10
         console.log(y) //20
      }
      let x = 10;
      let y = 20;
         inner()
    }
    outer()
// Function expression:it is a function that is assigned to a variable 
   let hello = function(name){
      return "Hello " + name
   }
    console.log(hello("Priya"))
//Higher order function:it is a function that takes another function as an argument or returns a function as a result 
//   function multiplegreet (fun,count){
//   for(let i=0; i<=count; i++){
//        fun()
//   }
// }
//   let greet1 = function(){
//       console.log("hello")
//   }

//  multiplegreet(greet1(),5)
 
 //methods:it is a function that is a property of an object
   const calculator = {
      num:45,
      add:function(a,b){
         return a+b
      },
      subtract:function(a,b){
         return a-b
      },
      multiply:function(a,b){
         return a*b
      }
   }
   
   console.log(calculator)
   console.log(calculator.add(5,10)) //15
       
 
      




      