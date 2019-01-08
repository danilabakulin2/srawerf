let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const nozh_div = document.getElementById('s');

function getComputerChoise() {
  const choises = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}
function convertToWord(letter){
if (letter == "r") return "Rock";
if (letter == "p") return "Paper";
if (letter == "s") return "Nochnici";

}
function win(userChoise, computerChoise) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoise)} beats ${convertToWord(computerChoise)}.Congrats!`;
}
function lose(userChoise, computerChoise) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoise)} beats ${convertToWord(userChoise)}.You lose!`;
}
function draw() {
  result_p.innerHTML = "Its a draw.";
}

function game(userChoise) {
  const computerChoise = getComputerChoise();
  switch (userChoise + computerChoise) {
    case "rs":
    case "pr":
    case "sp":
     win(userChoise, computerChoise);
     break;
    case "sr":
    case "rp":
    case "ps":
     lose(userChoise, computerChoise);
     break;
    case "ss":
    case "rr":
    case "pp":
     draw(userChoise, computerChoise);
     break;
  }
}

function main() {
 rock_div.addEventListener('click', function(){
  game("r");
})
 paper_div.addEventListener('click', function(){
  game("p");

})
 nozh_div.addEventListener('click', function(){
  game("s");

})
}
main();
