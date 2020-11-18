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




///////////////////////////////////////////////////////////////////////////////
// Cached DOM nodes
///////////////////////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const ratedEveryone = document.querySelector('.rated-everyone');
const twentyOne = document.querySelector('.twenty-one');
const modalInstructions = document.querySelector('.modal-instructions');
const startGame = document.querySelector('.start-game');




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
    modal.classList.toggle("open");
}
const openModalInstructions = () => {
    // remove the modal
    modal.remove();
    // add the open class to the open modal
    modalInstructions.classList.add('open');
}
const closeModalInstructions = () => {
    modalInstructions.classList.remove("open");
}




///////////////////////////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////////////////////////

ratedEveryone.addEventListener("click", openModalInstructions);
twentyOne.addEventListener("click", openModalInstructions);
startGame.addEventListener("click", closeModalInstructions);

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





// event listeners
// player class
// array of questions
// loop to keep game running
// update innerHTML
// function round() 
// if round < 10
// open modal, stop @ 10
