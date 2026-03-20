 
 let max =100;  
let randomnumber = Math.floor(Math.random() * max) + 1;
 let guess =prompt("Guess a number between 1 and 100") 
    while(true)
{ 
    if(guess=="quit"){
        console.log("Exiting the program")
        break;
    }
    if(guess==randomnumber){
         console.log("congratulations! you guessed the number")
        console.log("The random number is: "+randomnumber)
        break;
    }
    else if(guess < randomnumber)
        {
            
       guess= prompt ("your number is too small! please try again")
        
        }
    else (guess > randomnumber)
    {
        
      guess=prompt("your number is too large! please try again")
        
    }
   
    }