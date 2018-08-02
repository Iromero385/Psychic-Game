var numberOfWins = 0;
var numberOfGuesses = 9;
var numberOfLossess = 0;
var guessesSoFar = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
 


document.onkeypress = function(event){
if(!goodPick(event.key)){
    alert("LETTER!! Try again")
    return;
}
if(repeatedLetter(event.key)){
    alert("You pick that one already! Choose again.")
    return;
}
console.log(compGuess);
if (compGuess === event.key ){
    resetList();
    resetCompGuess();
    resetMessage();
    numberOfWins++;
    numberOfGuesses = 9;
    updateScreen();
    
     alert("How did you know?!!")
}
else if(numberOfGuesses === 1){
    numberOfGuesses= numberOfGuesses -1;
    updateScreen();
    resetCompGuess();
    numberOfLossess++;
    numberOfGuesses = 9;
    resetList();
    updateScreen();
    alert("You are bad at this." + " My letter was " + "'" + compGuess +"'");
}
else{
    numberOfGuesses= numberOfGuesses-1;
    guessesSoFar.push(event.key);
    updateScreen();
    guessNotCorrect();
}
    
}
function updateScreen(){
 document.getElementById("numberOfWins").textContent = "Wins: " + numberOfWins;
 document.getElementById("numberofGuessLeft").textContent = "Guess Left: " + numberOfGuesses;
 document.getElementById("guessSoFar").textContent = "Your Guesses so far: " + guessesSoFar;
 document.getElementById("numberOfLosses").textContent = "Losses: " + numberOfLossess;
 
}
function repeatedLetter(letter){
    return guessesSoFar.includes(letter);
}
function resetList(){
    guessesSoFar = [];
}
function goodPick(element){
    return alphabet.includes(element);
}
function gameOver(){
    var keepGoing = confirm("Do you want to keep playing?");
    return keepGoing;
}
function resetCompGuess(){
    compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
}
function guessNotCorrect(){
    document.getElementById("guessNotCorrect").textContent = "Your Guess Was Not Correct";
}
function resetMessage(){
    document.getElementById("guessNotCorrect").textContent = " ";
}
