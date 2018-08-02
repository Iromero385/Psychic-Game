var numberOfWins = 0;
var numberOfGuesses = 9;
var numberOfLossess = 0;
var guessesSoFar = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
// needs t reset after game is finish
var compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
 

function gameOver(){
    var keepGoing = confirm("Do you want to keep playing?");
    return keepGoing;
}

document.onkeypress = function(event){
    console.log(compGuess);
if(repeatedLetter(event.key)){
    alert("You pick that one already! Choose again.")
    return
}

if (compGuess === event.key ){
    numberOfWins++;
    updateScreen();
    compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
    numberOfGuesses = 9;
}
else if(numberOfGuesses === 1){
    alert("You are bad at this." + " My letter was " + "'" + compGuess +"'");
    numberOfGuesses= numberOfGuesses -1;
    updateScreen();
    compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
    numberOfLossess++;
    numberOfGuesses = 9;
    updateScreen();
}
else{
    numberOfGuesses= numberOfGuesses-1;
    guessesSoFar.push(event.key);
    updateScreen();
}
    
}
function updateScreen(){
    
 document.getElementById("numberOfWins").textContent = "Wins:" + numberOfWins;
 document.getElementById("numberofGuessLeft").textContent = "Guess Left:" + numberOfGuesses;
 document.getElementById("guessSoFar").textContent = "Your Guesses so far: " + guessesSoFar;
 document.getElementById("numberOfLosses").textContent = "Losses: " + numberOfLossess;
 
}
function repeatedLetter(letter){
    if (guessesSoFar.includes(letter)){
        return true;
    }
    else{
        return false;
    }

}