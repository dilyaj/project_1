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
// 6.


const questions = [
    "Who would die first in a zombie appocalypse?",
    "How often do you wash your bedsheets?",
    "Who would die first in a zombie appocalypse?",
    "Who do you think has the worst hygiene?"
]

let points = 0;
let counter = 0;

for (let i = 0; i < questions.length; i++) {

}

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
const nextQ = document.querySelector('.next-q');
const timeLeftDisplay = document.querySelector('#time-left')






// clear interval vs set interval

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
    }


document.addEventListener('DOMContentLoaded', () => {

    function countDown() {
        // console.log("hello world")
        let timeLeft = 10;
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -=1
        },   1000)
    }
    startGame.addEventListener('click', countDown)
    nextQ.addEventListener('click', countDown)
    });







    
// click on next = next question


///////////////////////////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////////////////////////

ratedEveryone.addEventListener("click", openModalInstructions);
twentyOne.addEventListener("click", openModalInstructions);
startGame.addEventListener("click", closeModalInstructions);
nextQ.addEventListener('click', updateModalInnerText);



window.onload = toggleModal;

///////////////////////////////////////////////////////////////////////////////
// Game board
///////////////////////////////////////////////////////////////////////////////

// pop up game card, timer, player stats
// 1st question is asked, timer begins countdown
// When player clicks "truth" button player's points increase by 10
// if "drink" player's points stay the same
// when time is up, "next round" buttons pops up
// when click on "next round", next round begins


// text on card change when "next" is clicked 





// function round() 
// if round < 10
// open modal, stop @ 10
