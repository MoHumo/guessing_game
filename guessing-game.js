/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/

const enter = document.querySelector('.enter');
const sumbit = document.querySelector('.sumbit');
const guess1 = document.querySelector('.guess1');
const guess2 = document.querySelector('.guess2');
const guess3 = document.querySelector('.guess3');
const guess4 = document.querySelector('.guess4');
const guess5 = document.querySelector('.guess5');
//1 A number between 1-100 will be randomly generated and is the winning number.
//2 The player inputs their guess in a text input field and then submits their guess.
//3 If the number submitted is the winning number, the player wins! Otherwise, they are allowed to try again.
//4 The game should give the player a hint after each guess, helping them know whether to guess lower or higher and how close they are.
//5 After five unsuccessful guesses, the game is over, and the player loses.

//set the global properties to use thoughout
let guessingGame = function(){
    this.guesses = null
    this.winningNumber = getRandomNum()
    this.guessbx = [];
}

//1 get random number between 1-100, winning number
function getRandomNum() {
    return Math.ceil(Math.random()*100) +1;
}

//2 make the sumbit button move numbers guessed in guessedboxes 
//and use the event listners to trigger that event when button is clicked
//uf player sumbits winning number they win

function enterGuess(){
    let guesses = guessbx.value
    if (guesses === getRandomNum){
        help.textContent = "winner winner chicken dinner"
    }
    else if (guesses < getRandomNum){
        help.textContent = "try again"
    }
}
sumbit.addEventListener('click', guessebx);
