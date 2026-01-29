let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw...");
  msg.innerText ="Game was Draw! play again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; 
    userScorePara.innerText = userScore;

    console.log("You win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++; 
    compScorePara.innerText = compScore;
    console.log("You lose!");
    msg.innerText = `You Lose! Your ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user-choice =", userChoice);
  //generate comp choice
  const compChoice = getCompChoice();
  console.log("Comp-choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors ,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock ,scissors
      userWin === "scissors" ? false : true;
    } else {
      //rovck , papar
      userWin === "rock" ? false : true;
    }

    showWinner(userWin ,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choices);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choices was clicked", userchoice);
    playGame(userchoice);
    // showWinner();
  });
});
