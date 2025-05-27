let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const message = document.getElementById("msg");
const resetBtn = document.getElementById("reset-btn");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

const determineWinner = (user, comp) => {
  if (user === comp) return null;
  return (user === "rock" && comp === "scissors") ||
         (user === "paper" && comp === "rock") ||
         (user === "scissors" && comp === "paper");
};

const updateUI = (winner, userChoice, compChoice) => {
  if (winner === null) {
    message.innerText = `🤝 It's a draw! You both chose ${userChoice}.`;
    message.style.backgroundColor = "#555";
  } else if (winner) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    message.innerText = `🎉 You win! ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    message.innerText = `😞 You lose! ${compChoice} beats ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const compChoice = getComputerChoice();
    const result = determineWinner(userChoice, compChoice);
    updateUI(result, userChoice, compChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreDisplay.innerText = 0;
  compScoreDisplay.innerText = 0;
  message.innerText = "Make your move!";
  message.style.backgroundColor = "#081b31";
});
