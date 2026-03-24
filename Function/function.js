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

   //This keyword
    const student1 ={
      name:"Priya",
      age:25,
      eng:79,
      math:85,
      phy:90,
      getavg(){
         let avg = (this.eng + this.math + this.phy)/3
         console.log(avg)
         console.log(this)
         console.log(`${this.name} average is ${avg}`) 
      } 
    } 
    student1.getavg()  
    
//this:it refers to the current object that is executing the code
function demo(){
   console.log(this)
}
demo() //window object:in non strict mode

//try and catch:it is used to handle errors in JavaScript
 try {
   console.log("hello")
   console.log("hello")
   console.log(o)
   console.log("welcome")
   console.log("welcome")
 } catch  {
   console.log("o is not define")

 }
 console.log("welcome") 
//Arrow function:it is a shorter syntax for writing functions in JavaScript
 const finalsum = (a,b) =>
 {
   return a+b;
 }
  console.log(finalsum(5,10)) //15
//create a function to give cube of a number using arrow function
 const cube =(num) =>
 {
   return num*num*num
 }
   console.log(cube(3)) //27
//create arrow function to print hello
  const msg =() =>
  {
   console.log("hello")
  }
  msg()
//emplicit return: if the function body contains only a single expression, we can omit the curly braces and the return keyword
   const square = num => num*num
   console.log(square(5)) //25
//settimeout:it is a function that is used to execute a function after a specified time interval

//  console.log("Hi there!")
//   setTimeout(() => {
//    console.log("kjit")
//   }, 5000)
//    console.log("welcome to")
// //setinterval:it is a function that is used to execute a function repeatedly at specified time intervals
//   let id = setInterval(() => {
//    console.log("hello")
//  }, 1000)
//  clearInterval(id) //to stop the interval after some time
//  //print hello every 2 seconds and stop after 5 times with using setinterval and settimeout
//   let id1 = setInterval(() =>{
//     console.log("Hello")
//   },2000)
//   setTimeout(() => {
//      clearInterval(id1)
//   }, 10000);

//create a object to how work this keyword in method
   const per = {
      name:"Priya",
      age:25,

     getage : function(){
      console.log(this)
      console.log(this.age)
     },
     getName : () => {
      console.log(this)
      console.log(this.name)
     }
   }
   console.log(per.getage()) //25

//Array methods
 //1.forEach method:
 let arr = [1,2,3,4,5]
 arr.forEach(function (ele){
   console.log(ele)
 }
)
 //arrow 
  let num = [1,2,3,4,5]
   num.forEach((ele)=> 
      {
   console.log(ele)
   })

   const arrobj = [
      {
         name :"Priya",
         marks:85
      },
      {
         name: "Anu",
         marks: 90
      },
    {
         name: "Riya",
         marks: 80
      }
   ]
   
   //acess the element of uper object with using arrow function 
    arrobj.forEach((ele) => {
      console.log(ele) 
    })

//2.map method:it is used to create a new array by calling a function for every array element
let arrmap = [1,2,3,4,5]
 let newarr = arrmap.map((ele) =>
    {
   return ele*2
})
   console.log(newarr) //[2,4,6,8,10]

//map method with object
 let students = [
   {
      name:"Priya",
      marks:85
   },
   {
      name:"ram",
      marks:90
   },
   {
      name:"shyam",
      marks :"89"
   }
]
let newcgpa = students.map((ele) => {

   return ele.marks/10
})
console.log(newcgpa) //[8.5,9,8.9]
//Filter method:it is used to create a new array with all elements that pass the test implemented by the provided function 
  let arrfilter = [1,2,3,4,5,24,25,46]
   let evenNum = arrfilter.filter((num) => {
       return num%2==0;

   })
   console.log(evenNum) //[2,4,24,46]  

//filter example
 let numbers =[1,0,7,9,8,2,4,6,9]
  let lessThan5 = numbers.filter((num) => {
   return num<5
  })
  console.log(lessThan5) //[1,0,2,4] 

//every method:it is used to test whether all elements in the array pass the test implemented by the provided function
 let arrevery = [8,2,4,12,18]
  let isEven = arrevery.every((num) => {
   return num%2==0 
  })
  console.log(isEven) //true 

//every method example
 let colors =["red","pink","blue","white","orange","grey"]

 //some method:it is used to test whether at least one element in the array passes the test implemented by the provided function
  let arrsome =[1,2,3,4,5,6]
   let hasEven = arrsome.some((num) => {
   return num%2==0
    })
   console.log(hasEven) //true
//reduce method:it is used to reduce the array to a single value by executing a reducer function on each element of the array 
 let arrreduce =[1,2,3,4,5]
  let sumresuce = arrreduce.reduce((res,ele) => {
   return res+ele
  })
  console.log(sumresuce) //15 
//reduce method example
  const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
  



  



  

       
 
      




      