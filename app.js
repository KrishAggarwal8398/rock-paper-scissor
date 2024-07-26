let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#you");
let compScorePara = document.querySelector("#comp");


for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", () => {
        const userChoice = choice[i].getAttribute("id");
        playGame(userChoice);
    });
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        msg.innerText = "Draw";
        msg.style.backgroundColor = "#5E503F";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = (compChoice === "scissors") ? true : false;
        }
        else if (userChoice === "paper") {
            userWin = (compChoice === "rock") ? true : false;
        }
        else {
            userWin = (compChoice === "paper") ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }


};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) { 
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else { 
        msg.innerText = `Comp Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const genCompChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);

    const compChoice = arr[idx];
    return compChoice;
};
