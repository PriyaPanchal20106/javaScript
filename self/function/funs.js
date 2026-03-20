//Arrow function 
 const vowel =(str) =>{
     let count =0; 
     for(const char of str)
     {
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
              ) {
                count++;
                }
          }
          return count;
    
 } 
 
//create a function with "function" keyword ,takes a string as an argument and returns the number of vowels in the string
 function countvowel (str) {
     let count =0; 
     for(const char of str)
     {
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
              ) {
                count++;
                }
          }
          return(count);
 }
//forEach function 
 let arr = ["pune", "mumbai","vadodara"]
  arr.forEach((val) => {
    console.log(val.toUpperCase());
  })
//For the given array of numbers,print the square of each value using the foreach loop 
 let nums =[1,2,3,4,5]
  nums.forEach((num) => {
    console.log(num * num);
  })
//filter function 
 let nums1 = [1,23,44,45,46,78,99,76]
   let fil = nums1.filter((value) =>{
     return value %2!==0 //it gives odd value
   })
   console.log(fil);
//create an array to filter out the marks of students who score 90+
 let marks = [70,68,98,90,94,56,87]
   let score = marks.filter((val) =>{
    return val >= 90;
   })
   console.log(score)