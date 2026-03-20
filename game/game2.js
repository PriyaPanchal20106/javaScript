//Guess the movie name with using do while loop
const favmovie ="KGF"
let guess = prompt("Guess the movie name: ")
while ((guess !== favmovie) && (guess !== "quite")) {
    guess = prompt("wrong guess! try again")
}
if (guess == favmovie){
    alert("Congratulations! Your right.")
}
if(guess =="quite"){
    alert("Better luck next time!")
}

