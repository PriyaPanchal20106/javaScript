console.log("Hello, World!")
let a=10
let b=20
let c=a+b
console.log("Sum of a and b is: " + c)

let age = 25
age+= 5
console.log("Age after 5 years: " + age) 

let age1 = 30
let newage = ++age1
console.log(age1)
console.log(newage)

let age2 = 30
let newage2 = age2++
console.log(age2)
console.log(newage2)
console.log(typeof(NaN))
//alert concept

//prompt concept

// let fName = prompt("Enter your first name")


   // let lName = prompt("Enter your last name")

   // console.log("My full name is: " + fName + " " + lName)

    console.error("This is an error message")

    console.warn("This is a warning message")
//Trim method:to remove white space if desired code
    let str ="   welcome  to kjit    "
    console.log(str.trim())

    let name = "priYa panchal"
    console.log(name.toUpperCase())
    console.log(name.toLowerCase())
//indexof method
    let fruit = "i love coding"
     fruit.indexOf("love")
        console.log(fruit.indexOf("love"))

        let  clg="welcome to kjit"
        clg.indexOf("z")
        console.log(clg.indexOf("z"))

        let array=[10,20,30,40,50]
        console.log(array.indexOf(30))
//slice method
        let abc="iamgoodboy"
        console.log(abc.slice(7,10))

        let message=["hello","welcome","to","kjit","campus"]
        console.log(message.slice(3))
        console.log(message)
        console.log(message.slice(1,3))
 // no effect on original array
//splice method
      let msg=["red","yellow","black","orange","pink","white"]
       console.log(msg.splice(4))
        console.log(msg)
        console.log(msg.splice(0,1)) 
        console.log(msg)
        console.log(msg.splice(0,1,"blue","gray","green"))  
        console.log(msg)

        const fruitse = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
          const citrus = fruitse.slice(1, 3);
                console.log(citrus)

//replace method
         let text="ILoveCoding"
         console.log(text.replace("Love","do"))
         console.log(text.replace("o","a"))
//repeat method
         let car="BMW"
         console.log(car.repeat(3))
//example:

         const stri = "Twas the night before Xmas...";
        const newStr = stri.replace(/xmas/i, "Christmas");
        console.log(newStr);

//split method

         let hobby="i love coding"
         console.log(hobby.split(" "))
//example:
        const stre = "The quick brown fox jumps over the lazy dog.";
         const words = stre.split(" ");
         console.log(words[3]);

//example:
         const emptyString = "";

     // string is empty and separator is non-empty
       console.log(emptyString.split("a"));
      // [""]  

     // string and separator are both empty strings
      console.log(emptyString.split(emptyString));
      // []

//array methods:first create an array
          let fruits=["apple","banana","grapes"]   
            console.log(fruits[1])
         let info =["priya",25, 50.9,true]
         console.log(info[0][3])

      let bikes =  ["honda","yamaha","tvs"]
                 console.log(bikes[0]="ducati")
                   console.log(bikes)
           console.log(bikes.push("suzuki"))
             console.log(bikes)
          console.log(bikes.pop("yamaha"))
             console.log(bikes)
        console.log(bikes.shift())
        
//array length
        let colors=["red","blue","green","white"]
        console.log(colors.length) 
        console.log(colors[1][1])
        
        let info1 =["priya",25, 50.9,true]
         console.log(info1)

//array replace
         let colors1=["red","blue","green","white"]
         colors1[2]="black"
         console.log(colors1)

        let name2="rohit"
         name2[0]="m"
        console.log(name2)
//arrays are mutable
        let arr=[10,20,30]
        console.log(arr)
        arr[0]=100
        console.log(arr)

//array methods:push, pop,
         let cars1=["audi","bmw","mercedes"]
        console.log(cars1)
        console.log(cars1.push("ferrari"))
        console.log(cars1.pop())
        console.log(cars1)

     let nums=[1,2,3,4,5]
        console.log(nums)
        console.log(nums.push(6))
        console.log(nums.pop())
        console.log(nums)

        let nums3=[10,20,30,40]
        nums3.push(50)
        console.log(nums3)
        nums3.pop()
        console.log(nums3)    

//shift method or unshift method
   //unshift :adds an element at the beginning of the array
   //shift :removes an element from the beginning of the array

        let fruits1=["apple","banana","grapes"]
        console.log(fruits1)
        console.log(fruits1.unshift("mango"))
        console.log(fruits1)
        console.log(fruits1.shift())
        console.log(fruits1)

        let colors2=["red","blue","green"]
        colors2.unshift("yellow")
        colors2.unshift("black")
        console.log(colors2)
        colors2.shift()
        console.log(colors2)

//includes method
        let nums1=[1,2,3,4,5]
        console.log(nums1)
        console.log(nums1.includes(3))
        console.log(nums1.includes(8))

        let colors3=["red","blue","green","black"]
        console.log(colors3.includes("blue"))
        console.log(colors3.includes("white"))

//concat method is used to merge two or more arrays
        let arr1=[1,2,3]
        let arr2=[4,5,6]
        let arr3=arr1.concat(arr2)
        console.log(arr3)

        let pricolors=["pink","purple"]
        console.log(pricolors)
        let neoncolors=["neon green","neon yellow"]    
        let allcolors=pricolors.concat(neoncolors)
        console.log(allcolors)
         
//Templet literals
     let penprice=10
     let pencilprice=10
     output="Total price is " + (penprice + pencilprice )  + " rupees"         
      console.log(output)
      output=`Total price is ${penprice + pencilprice} rupees`
//example 
let month=['jan','july','march','august']
console.log(month)
month[0]='july'
month[1]='june'
console.log(month)
//reverse method
let numbers=[1,2,3,4,5]
console.log(numbers.reverse())
console.log(numbers)
//sort method
 let days=["mon","tues","sun","thus","fri"]
        console.log(days.sort())

 let square=[1,4,9,16,25,36,49,64,81,100]
 console.log(square.sort())

 let alpha=["a","Aa","ab","ca","Cd","Bb","bg","da"]
        console.log(alpha.sort())

console.log(1==1)
console.log(1=="1")//check values only
console.log(1==="1")//check values and data types both
console.log([1]==[1])//false because two different references cause addresses are different

 let arr6=1
 let arr5=1
 console.log(arr6===arr5)
  
 let arr7=["a","b"]
 let arrcopy= arr7
 console.log(arrcopy)
 arrcopy.push("c")
 console.log(arr7)
console.log(arrcopy)
//constant array
 let abc1=5
  abc1=10
 console.log(abc1)

 const arr9=["a","b","c"]
  arr9.push("d")
 console.log(arr9)//not change the value cause address already store in memory

 //nested array
   let newarr=[[1,2,3],[4,5,6],[7,8,9]]
    console.log(newarr[0][1])

//for loop
 for(let i=10; i>=1; i--){
        console.log(i)
 }
 //even numbers between 1 to 20 with for loop
 for(let even=2; even<=20; even=even+2){
        console.log(even)
 }
 //odd numbers between 1 to 15 with for loop
        for(let odd=1; odd<=15; odd=odd+2){
        console.log(odd)
        }
//print multiplication table of 5
     /*let input=prompt("Enter number")
     input=parseInt(input)
     for(let i=5; i<=50; i=i+5){
        console.log(i)
     }*/
//nested for loop
for(let i =1; i<=3; i++)
       
        {  console.log(`outer loop: ${i}`)
        for(let j=1; j<=3; j++){
                console.log(j)
        }  
}
// print 1 to 10 number with while loop
       let num=1
       while(num<=10){
        console.log(num)
        num++
       }
//loops in array for of loop
        let colors4=["red","blue","green","yellow"]
        for(let color of colors4){
                console.log(color)
        }
// object literals
    const student={
        name:"priya",
        age:21,
        marks:85.6,
        city:"Anand"
    }
        console.log(student)
     
     const student1=['priya',21,85.6,'Anand']
     console.log(student1)
//accessing object properties
//two ways to access object properties
//1.dot notation
        console.log(student.name)
        console.log(student.age)
//2.bracket notation
        console.log(student['marks'])
        console.log(student['city'])

   const item={
        price:'100$',
        discount:'20%', 
        colors:['red','blue','green']
   }
   console.log(item.colors[0])
// how to add and update object properties
      const student2={
        name:"priya",
        age:21,
        marks:85.6,
        city:"Anand"
      }
      console.log(student2.city = "vadodara")
        console.log(student2)
        student2.country="India"
        console.log(student2)
//delete object properties
        delete student2.country
        console.log(student2)
//object of objects
        const student3={
      Priya:{
        age:21,
        marks:85.6},
     Jahanvi:{
        age:22,
        marks:80.2},
      Riya:{
        age:20,
        marks:78.5}
        }
        console.log(student3)
        console.log(student3.Priya.country="India")
        console.log(student3.Riya.marks=80.5)
        console.log(student3)
//array of objects
        const classinfo=[
        {name:"priya",age:21,marks:85.6,city:"Anand"},
        {name:"jahanvi",age:22,marks:80.2,city:"Surat"},
        {name:"riya",age:20,marks:78.5,city:"Vadodara"}
        ]  
        console.log(classinfo)
          for(let i=0;i<classinfo.length; i++){
                console.log(classinfo[i].name) 
          }
        console.log(`${classinfo[0].name} Lives in ${classinfo[0].city}`)
//math object
        console.log(Math.PI)
        console.log(Math.E)

//math.abs:use to find absolute value of a number 
      console.log(Math.abs(-5))
//math.pow:use to find power of a number
            console.log(Math.pow(2,3))
//math.floor:use to round down a number to the nearest integer
                console.log(Math.floor(3.7))
                console.log(Math.floor(5.999))
//math.ceil:use to round up a number to the nearest integer
                        console.log(Math.ceil(5.2))
//math.random:use to generate a random number between 0 and 1
                        console.log(Math.random())
//math.random with using this generate 1 to 10 number
              let randomnum= Math.random()
                 console.log(randomnum)
                 let num1= Math.floor(randomnum*5+1)
                 console.log(num1)
                console.log(Math.floor(Math.random()*10+1)) 
//generate random number between 1 to 5
                console.log(Math.floor(Math.random()*5+1))
//generate random number between 21 to 25
       let rannum= Math.random()
        console.log(rannum)
        let num2= Math.floor(rannum*5+21)
        console.log(num2)
//  generate the                     

         
/*function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}*/

let getRanInt = min=1, max=10
 const minCeiled = Math.ceil(min);
 const maxFloored = Math.floor(max);
 console.log(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled))


  
  
 
        



   
 


                

 

 





