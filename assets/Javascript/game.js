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
if (compGuess === event.key ){
    guessesSoFar.push(event.key); 
    updateScreen();
    newGame();
}
else if(numberOfGuesses === 1){
    numberOfGuesses= numberOfGuesses -1;
    updateScreen();
    numberOfLossess++;
    numberOfGuesses = 9;
    resetMessage("You are bad at this." + " My letter was "  + "<h1>" + compGuess + "</h1>"  + " What is my new Letter?");
    resetList();
    resetCompGuess();
    setTimeout(function(){updateScreen();}, 1200);
   
}
else{
    console.log(compGuess);
    numberOfGuesses= numberOfGuesses-1;
    guessesSoFar.push(event.key);
    updateScreen();
    resetMessage('Your Guess Was Not Correct');
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
function resetMessage(message){
    document.getElementById("guessNotCorrect").innerHTML = message;
}

function newGame(){
   
        resetList();
        numberOfWins++;
        numberOfGuesses = 9;
        resetCompGuess();
        updateScreen();
        resetMessage("Congratulations: What is my new Letter?")
       
    
};