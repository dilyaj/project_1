/* ======================
Truth or Drink
=========================*/
// 1. Create a modal
// - create modal - with 2 buttons
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
const winBox = document.querySelector('.win-box'); 




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

const randomNumGenerator = (arr) => {
    return Math.floor(Math.random() * arr.length)
}
const updateModalInnerText = () => {
    modalInnerText.innerHTML = questions[randomNumGenerator(questions)];
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
    if (firstPlayer.points >= 100 || secondPlayer.points >= 100) {
        if (firstPlayer.points > secondPlayer.points) {
            // need to display which player wins on screen
            winBox.innerHTML = ("CONGRATS PLAYER 1. YOU'RE LESS DRUNK THAN PLAYER 2.")
            gameContainer.innerHTML = ("")
            gameContainer.style.cssText = `background: url("https://media.giphy.com/media/YfMHLC2s6okBq/giphy.gif") 
                                            no-repeat; background-size: cover; height: 350px; border-radius: 50%;`
        } else if (secondPlayer.points > firstPlayer.points) {
            winBox.innerHTML = ("CONGRATS PLAYER 2. YOU'RE LESS DRUNK THAN PLAYER 1.")
            gameContainer.innerHTML = ("")
            gameContainer.style.cssText = `background: url("https://media.giphy.com/media/YfMHLC2s6okBq/giphy.gif") 
                                            no-repeat; background-size: cover; height: 350px; border-radius: 50%;`
        }
        
    }
    //remove truth/drink/next
}


// create counter 
// check win 
const game = () => {
    if(firstPlayer.score >= 100 || secondPlayer.score >= 100) {
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
    startGame.addEventListener('click', countDown)
    nextQ.addEventListener('click', stopTimer)
    });



const questions = [
    "How much money is in your<br>bank account right now?",
    "How often do you wash your bedsheets?",
    "Would you rather be big spoon<br>or little spoon?",
    "What's your favorite conspiracy theory?",
    "When was the last time you cried?<br>why?",
    "If you had to give someone here a makeover,<br>who would it be?",
    "Do you have anything on your record?",
    "What's the first thing<br>you'd do if you woke up<br>and were the oppsite sex?",
    "What's your favorite swear word?",
    "What is the most illegal thing<br>you have ever done?",
    "What was the last thing you searched<br>for on your phone web browser?<br>Show us.",
    "Have you ever farted during a zoom call?",
    "What app on your phone<br>do you waste the most time on?",
    "How old were you when you<br>got your first cell phone?",
    "If you HAD to play matchmaker,<br> which two people here would you match?",
    "Do you think it's fine to pee in the shower?",
    "What's something you're glad your<br>family doesn't know about you?",
    `What's your most watched "kid" movie?`,
    "Do you cover your laptop camera<br>when you're not using it?",
    "Could you go a week without junk food?",
    "Have you ever used someone elses'<br>toothbrush? Whose was it?",
    "If you could have a dinner party<br>with any 3 people,<br>dead or alive,<br>who would it be and why?",
    "How much older than you could<br>a person that you date be?",
    "Have you ever been on the dark Web?",









]


///////////////////////////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////////////////////////

twentyOne.addEventListener("click", openModalInstructions);
startGame.addEventListener("click", closeModalInstructions);
truth.addEventListener("click", truthPoints);
drink.addEventListener("click", drinkPoints);
nextQ.addEventListener('click', updateModalInnerText);



window.onload = toggleModal;

