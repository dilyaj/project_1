/* ======================
Truth or Drink
=========================*/
// 1. Create a modal
// - create modal - with 2 buttons
// - if "Rated Everyone" is clicked then, make modal go away & open up those instructions
// - if click on "21+", make modal go away & open those instructions
// 2. Create an Instruction page
// instructions page - needs a "let's play" button
// close instruction page when button is clicked
// open game board
// 3. Make a Players class
// - The players should have these properties: player number, points 
// - The players should have these methods: increase ppoints by 10 when truth is told
// 4. Create game card modal
// - have modal pop up once "start game" button is clicked
// 5. Create countdown timer
// - have timer restart evey time "next" is clicked
// 6. Have player points counter
// - add 20 points when "truth" is clicked
// - +10 when "drink" button is clicked



///////////////////////////////////////////////////////////////////////////////
// Cached DOM nodes
///////////////////////////////////////////////////////////////////////////////

const openModal = document.querySelector(".open-modal");
const ratedEveryone = document.querySelector('.rated-everyone');
const twentyOne = document.querySelector('.twenty-one');
const modalInstructions = document.querySelector('.modal-instructions');
const startGame = document.querySelector('.start-game');
const gameContainer = document.querySelector('.game-container');
const modalInnerText = document.querySelector('.modal--inner');
const truth = document.getElementById("truth");
const drink = document.getElementById("drink");
const score = document.getElementById("score");
const nextQ = document.querySelector('.next-q');
const player1Points = document.getElementById('player1Points');
const player2Points = document.getElementById('player2Points');
const timeLeftDisplay = document.querySelector('#time-left');




///////////////////////////////////////////////////////////////////////////////
// Create Players
///////////////////////////////////////////////////////////////////////////////
class Player {
    constructor (player, points) {
        this.player = player;
        this.points = points;
    
    }
}    

///////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////
const firstPlayer = new Player("Player 1", 0);
const secondPlayer = new Player("Player 2", 0);
let currentPlayer = 1;

let points = 0;
let counter = 0;


///////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////

const toggleModal = () => {
    openModal.classList.toggle("open");
}
const openModalInstructions = () => {
    // remove the modal
    openModal.remove();
    // add the open class to the open modal
    modalInstructions.classList.add('open');
}
const closeModalInstructions = () => {
    modalInstructions.classList.remove("open");
    openGameContainer();
}
const openGameContainer = () => {
    gameContainer.classList.add("open");
    updateModalInnerText();
}

const updateModalInnerText = () => {
    modalInnerText.innerHTML = questions[counter];
    counter++;
    nextQ.classList.add('hide');
}
    



// add points to players    
const truthPoints = () => {
    nextQ.classList.remove('hide');
    if (currentPlayer === 1) {
        firstPlayer.points+= 20;
        currentPlayer = 2; 
    }
    else {
        secondPlayer.points+= 20;
        currentPlayer = 1;
    }
    endGame();
    updateScoreInDOM();
}
const drinkPoints = () => {
    nextQ.classList.remove('hide');

    if (currentPlayer === 1) {
        firstPlayer.points+= 10;
        currentPlayer = 2; 
    }
    else {
        secondPlayer.points+= 10;
        currentPlayer = 1;
    }
    endGame();
    updateScoreInDOM();
}

const updateScoreInDOM = () => {
    player1Points.innerHTML = firstPlayer.points;
    player2Points.innerHTML = secondPlayer.points;
}

// let the questions continue for 10 rounds
// unless a player reaches 50 points first 
function endGame() {
    if (firstPlayer.points >= 50 || secondPlayer.points >= 50) {
        if (firstPlayer.points > secondPlayer.points) {
            // need to display which player wins on screen
            modalInnerText.innerHTML = ("You made it to 50 points! You win!")
            // return win;
        } else if (secondPlayer.points > firstPlayer.points) {
            modalInnerText.innerHTML = ("You made it to 50 points! You win!")
            // return win; 
        }
    //remove truth/drink/next

    }
}


// create counter 
// check win 
const game = () => {
    if(firstPlayer.score >= 50 || secondPlayer.score >= 50) {
    endGame();
    }
}

let myTimer;
let currentTime = 10;
const timer = () => {
    if(currentTime <= 1) {
        clearInterval(myTimer);
    } 
    currentTime--;
    timeLeftDisplay.innerHTML = currentTime;
}
const stopTimer = () => {
    clearInterval(myTimer)
    currentTime = 10;
    timeLeftDisplay.innerHTML = currentTime;
    countDown();
}
const countDown = () => {
    myTimer = setInterval(timer, 1000)
}
document.addEventListener('DOMContentLoaded', () => {
    game();
    // function countDown() {
    //     let timeLeft = 10;
    //     setInterval(function(){
    //         if(timeLeft <= 0 ) {
    //             clearInterval(timeLeft = 0)
    //         }
    //         timeLeftDisplay.innerHTML = timeLeft;
    //         timeLeft -=1
    //     },   1000)
    // }
    startGame.addEventListener('click', countDown)
    nextQ.addEventListener('click', stopTimer)
    });



const questions = [
    "Who would die first in a zombie appocalypse?",
    "How often do you wash your bedsheets?",
    "Who would die first in a zombie appocalypse?",
    "Who do you think has the worst hygiene?",
    "Who would die first in a zombie appocalypse?",
    "How often do you wash your bedsheets?",
    "Who would die first in a zombie appocalypse?",
    "Who do you think has the worst hygiene?",
    "Who would die first in a zombie appocalypse?",
    "How often do you wash your bedsheets?",
  
]


// if player clicks on "Truth" button, player +20 points and pop up "next button"
// if "drink", +10
// pop up "next" button


if (document.getElementById('truth').clicked === true) {
    document.getElementById('score') = score + 20;
}
else if (document.getElementById('drink').clicked === true) {
    document.getElementById('score') = score + 10;
}



    


///////////////////////////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////////////////////////

ratedEveryone.addEventListener("click", openModalInstructions);
twentyOne.addEventListener("click", openModalInstructions);
startGame.addEventListener("click", closeModalInstructions);
truth.addEventListener("click", truthPoints);
drink.addEventListener("click", drinkPoints);
nextQ.addEventListener('click', updateModalInnerText);



window.onload = toggleModal;

///////////////////////////////////////////////////////////////////////////////
// Game board
///////////////////////////////////////////////////////////////////////////////



