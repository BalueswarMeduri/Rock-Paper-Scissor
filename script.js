let toggle = document.querySelector('.input');
let body = document.querySelector('body');
let currMode = "light";
let navbar = document.querySelector(".nav-bar");
let heading = document.querySelector(".heading");
let btn = document.querySelector(".btn")[0];
let png = document.getElementsByClassName("png")

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector(".loder");
        loader.classList.add("loder-hidden");
    }, 2000); // Delay in milliseconds (adjust as needed)
});
toggle.addEventListener('click', () => {
    if (toggle.checked) {
        currMode = "dark";
        body.style.background = "#313131";
        body.style.color = "white";
        body.style.backgroundImage = "radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)";
        navbar.style.background = "#212121"; // Dark mode navbar background color // Dark mode navbar text color
        heading.style.color = "white";
        body.style.backgroundSize = "30px 30px";
        body.style.backgroundPosition = " -5px -5px";
    } else {
        currMode = "light";
        body.style.background = "white";
        body.style.color = "black";
        body.style.backgroundImage = "none"; // Remove background image when switching to light mode
        navbar.style.background = "lightgrey"; // Light mode navbar background color
        heading.style.color = "black";
        body.style.backgroundImage = "radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)";
        body.style.backgroundSize = "30px 30px";
        body.style.backgroundPosition = " -5px -5px";
        
    }
});


let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".compu-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.background = "#FFAF45"; // Yellow for draw
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "#41B06E"; // Green for win
    } else {
        console.log("Computer wins");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "#EF4040"; // Red for lose
    }

    if (userScore === 5 || compScore === 5) {
        // Game over, display final result
        if (userScore === 5) {
            msg.innerText = "You Win the Game!";
        } else {
            msg.innerText = "Computer Wins the Game!";
        }
        // Optionally, you can reset the scores here if you want to play again
        // userScore = 0;
        // compScore = 0;
    }
}

const playGame = (userChoice) => {
    const compChoice = generateComputerChoice();
    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")
        ) {
            userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetBtn = document.querySelector(".btn");
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Message Area";
    msg.style.background = "none";
    enableChoices(); // Enable choices after reset
}