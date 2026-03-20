document.writeln("welcome to first page of javascript");
var num =160;
var sum =0
var check = num
var armstrong=0
var length = num.toString().length
var power = 0
 while(num !=0){
    armstrong = num % 10
    power = Math.pow(armstrong,length)
   sum =sum+ power
   num = parseInt(num/10)
 }

    if(check == sum){
        console.log(""+ check + " is an armstrong number")
    }else{
        console.log(""+ check + " is not an armstrong number")
    }
//practice set-Q1:create a variable of type string and add a number to it.
let a="priya"
let b=20
console.log(a + b)
//Q-2:use typeof operator to find the datatype of the string last question
console.log(typeof (a+b))
//Q-3:create a const object in javascript can you change it to hold a number letter
/*we will not chnage in the string value if at once declare it*/

//Q-4:Try to add a new key to the const object in Q-3
const a1={
    name1:"priya",
    section :1,
    to :false   
}
console.log(a1)
/*a1=45
console.log(a1)*/
a1['friend']="shubham"
a1['name']= "riya"
console.log(a1)

//Q-5:write a js program to create a word -meaning dictionary of 5 words
const dict = {
    mean :"meaning of word",
    appreciate :"recognize the full worth of",
    yakka :"especially hard work"
}
console.log(dict.yakka)
//converting string to a number
//let pro=prompt("hey whats your age?")
//   pro=Number.parseInt(pro)
//   console.log(typeof pro)

 
//switch statement
/*let age =prompt("what is your age?")
switch(age){
    case '12':
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
         break    
        case '15':
        console.log("your age is 15")
        break
        default:
            console.log("your age is not special")

}*/
// Practise set:3
//Q.1 write a program to print the marks of the students in an object using for loop
  let marks = {
    harry:90,
    shubham:9,
    monika:4,
    shreya:15

  }  
  for( let i=0;i<Object.keys(marks).length;i++){
    console.log(" The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])

  }
//Q.2 write a function to find mean of 5 numbers
 const mean = (a,b,c,d)=>{
    return(a+ b+ c+ d)/4

 }
  console.log(mean(4,5,6,7))
//Template literals
let boy1="Nikhil"
let boy2="Pramod"
 let sentence = `${boy1} is a friend of ${boy2}`
 console.log(sentence)
 //Escape sequense character
 let fruite = 'Bana \'na'
 console.log(fruite)
 let car = "farra\"\nri"
 console.log(car)
 let color = 'Yell\'\tow'
 console.log(color)
//Q.5 Extract the amount out of this string "please give RS 1000"
 let str2="Please give RS 1000"
 let amount = Number.parseInt(str2.slice(15))
 console.log(amount)
 console.log(typeof amount)
// join method 
let num4 = [10,20,30,45,18,33]
 console.log(num4.join("*"))
// sort method
let compare = (a,b)=>{
    return a-b
}
 let element =[551,223,3,34,56,76,23]
        element.sort(compare)
  console.log(element)
//array loops
//1.for each
 let num3 = [3,5,1,2,4]
 num3.forEach((element) => {
    console.log(element*element)
 })
 //2.Array.from
  let name3 ="harry"
  let arr =Array.from(name3)
  console.log(arr)
//3. for...of
 for(let item of num3){
    console.log(item)
 }
//4. for...in
 for(let i in num3){
    console.log(num3[i])
 }
//Array map method
 let any = [23,24, 56]
let m = any.map((value,index,array)=>{
       console.log(value, index,array)
       return value + index
})
console.log(m)
//Array filter method
 let any1 = [23,24,56,0,3,5]
   let m2 = any1.filter((a)=>{
     return a<10
  })
  console.log(m2)
//Q.1 create an array of  numbers and take input from the user to add number to this array 
 let arr1 =[10,20,34,5]
  let a2;
  do{
  let req =console.log ("Enter a Number")
  req= Number.parseInt(req)
  arr1.push(req)
}while(a2!=0);
  console.log(arr1) 
//change the background color of the page take input from user using prompt
  let color1 = prompt("Enter your color")
  document.body.style.background = color1

  





