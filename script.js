// ai logic returns the weapons randomly and returns the selection to the calling function
function computerSelection() {
    let aiSelects = Math.floor(Math.random() * 3 );
        if (aiSelects === 0) {
            aiSelects = "rock";
            aiChoice.textContent = "🖥️ Computer chooses 🗿rock";
            return aiSelects;
        } else if (aiSelects === 1) {
            aiSelects = "scissor";
            aiChoice.textContent = "🖥️ Computer chooses ✂️scissor";
            return aiSelects;
        } else if (aiSelects === 2) {
            aiSelects = "paper";
            aiChoice.textContent = "🖥️ Computer chooses 📎paper";
            return aiSelects;
        } else {
            console.log("The AI is broken help");
        }
}

// to reset all the paragraphs containing in game contents on command
function resetValues() {
    playerScore.textContent = "0";
    aiScore.textContent = "0";
    choicePara.textContent = "Game response here";
    aiChoice.textContent = "Computer choice here";
}


// fires up the function everytime an event is catched and checks if the player won or ai?
function playRound(playerSelection, aiGenerates) {
    if (playerScore.textContent === "5") {
        resetValues();
        alert("🥳Congratulations!");
        return;
    } else if (aiScore.textContent === "5") {
        resetValues();
        alert("😢Sorry, Try again!");
        return;
    }
    else if (playerSelection === "rock" && aiGenerates === "paper") {
        choicePara.textContent = "You Lose! 📎Paper beats 🗿Rock";
        aiScore.textContent = Number(aiScore.textContent) + 1;
        return;
    } else if (playerSelection === "rock" && aiGenerates === "scissor") {
        choicePara.textContent = "You Win! 🗿Rock beats ✂️Scissor" ;
        playerScore.textContent = Number(playerScore.textContent) + 1;
        return;
    } else if (playerSelection === "scissor" && aiGenerates === "paper") {
        choicePara.textContent = "You Win! ✂️Scissor beats 📎Paper";
        playerScore.textContent = Number(playerScore.textContent) + 1;
        return;
    } else if (playerSelection === "scissor" && aiGenerates === "rock") {
        choicePara.textContent = "You Lose! 🗿Rock beats ✂️Scissor";
        aiScore.textContent = Number(aiScore.textContent) + 1;
        return;
    } else if (playerSelection === "paper" && aiGenerates === "rock") {
        choicePara.textContent = "You Win! 📎Paper beats 🗿Rock";
        playerScore.textContent = Number(playerScore.textContent) + 1;
        return;
    } else if (playerSelection === "paper" && aiGenerates === "scissor") {
        choicePara.textContent = "You Lose! ✂️Scissor beats 📎Paper";
        aiScore.textContent = Number(aiScore.textContent) + 1;
        return;
    } if (playerSelection === aiGenerates) {
        choicePara.textContent = "Draw!";
        return;
    } else {
        console.log("Help! Something went horribly wrong...");
        console.log(aiGenerates, playerSelection);
    }
}

// query selectors for various text content holders to dynamically edit them
let choicePara = document.querySelector(".choice-response>p");
let aiChoice = document.querySelector(".ai-choice>p");
let playerScore = document.querySelector(".player-score>p");
let aiScore = document.querySelector(".ai-score>p");


// query selector for each button that listens to click and fires playRound function
let rockBtn = document.querySelector(".rock");
let scissorBtn = document.querySelector(".scissor");
let paperBtn = document.querySelector(".paper");
let resetBtn = document.querySelector(".reset>button");

rockBtn.addEventListener("click", function(){
    playRound("rock", computerSelection());
});
scissorBtn.addEventListener("click", function(){
    playRound("scissor", computerSelection());
});
paperBtn.addEventListener("click", function(){
    playRound("paper", computerSelection());
});
resetBtn.addEventListener("click", function() {
    resetValues();
});

