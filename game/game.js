//guess the movie name with using while loop
 const favmovie = "Inception"
    let guess = prompt("Guess the movie name: ")
    while ((guess !== favmovie) && (guess !== "quit")) {
        
        guess = prompt("Wrong guess! Try again: ")
    }
    if (guess == favmovie){
        alert("Congratulations! Your right.")

    } 
    if(guess == "quit"){
        alert("Better luck next time!")
    }

