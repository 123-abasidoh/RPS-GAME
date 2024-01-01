window.addEventListener("load", () => {
  const loader = document.getElementById("load");
  loader.style.display = "none";
});
let add = 0
let sub =0
let mub = 0

 let declared = document.getElementById("scaling");
 let wins = document.getElementById("wins");
 let ties = document.getElementById("ties");
 let lose = document.getElementById("lose");

function rock() {
  const random = Math.round(Math.random() * 2);
  let computerMove = "";
  if (random == 0) {
    computerMove = "rock";
  } else if (random == 1) {
    computerMove = "paper";
  } else if (random == 2) {
    computerMove = "scissors";
  }
  let computer = (document.getElementById(
    "computer"
  ).textContent = `${computerMove}`);
  let you = (document.getElementById("you").textContent = `rock`);
  if (computerMove == `rock`) {
   
    declared.textContent = `A tie!`;
    declared.style.color = `blue `;
    ties.textContent = ` ${(add = add + 1)}`;
  } else if (computerMove == `scissors`) {
    let declared = document.getElementById("scaling");
    declared.textContent = `You win!`;
    declared.style.color = "green";
    wins.textContent = ` ${(sub = sub + 1)}`;
  } else {
    let declared = document.getElementById("scaling");
    declared.textContent = `Try again!`;
    declared.style.color = "red";
    lose.textContent = ` ${(mub = mub + 1)}`;
  }
}
function paper() {
  const random = Math.round(Math.random() * 2);
  let computerMove = "";
  if (random == 0) {
    computerMove = "rock";
  } else if (random == 1) {
    computerMove = "paper";
  } else if (random == 2) {
    computerMove = "scissors";
  }
  console.log(computerMove);
  let computer = (document.getElementById(
    "computer"
  ).textContent = `${computerMove}`);
  let you = (document.getElementById("you").textContent = `paper`);
  if (computerMove == `paper`) {
   
    declared.textContent = `A tie!`;
    declared.style.color = `blue `;
    ties.textContent = ` ${(add = add + 1)}`;
  } else if (computerMove == `rock`) {
    let declared = document.getElementById("scaling");
    declared.textContent = `You win!`;
    declared.style.color = "green";
    wins.textContent = ` ${(sub = sub + 1)}`;
  } else {
    let declared = document.getElementById("scaling");
    declared.textContent = `Try again!`;
    declared.style.color = "red";
    lose.textContent = ` ${(mub = mub + 1)}`;
  }
}
function scissors() {
  const random = Math.round(Math.random() * 2);
  let computerMove = "";
  if (random == 0) {
    computerMove = "rock";
  } else if (random == 1) {
    computerMove = "paper";
  } else if (random == 2) {
    computerMove = "scissors";
  }
  let computer = (document.getElementById(
    "computer"
  ).textContent = `${computerMove}`);
  let you = (document.getElementById("you").textContent = "scissors");
  if (computerMove == `scissors`) {
    declared.textContent = `A tie!`;
    declared.style.color = `blue `;
    ties.textContent = ` ${(add = add + 1)}`;
  } else if (computerMove == `paper`) {
    let declared = document.getElementById("scaling");
    declared.textContent = `You win!`;
    declared.style.color = "green";
    wins.textContent = ` ${(sub = sub + 1)}`;
  } else {
    let declared = document.getElementById("scaling");
    declared.textContent = `Try again!`;
    declared.style.color = "red";
    lose.textContent = ` ${(mub = mub + 1)}`;
  }
  console.log(computerMove);
}
console.log(random);
function reset() {
  wins.innerHTML ="0"
  ties.innerHTML ="0"
  lose.innerHTML = "0"
  you.innerHTML = " "
  computer.innerHTML = " "
  scaling.innerHTML = ""
  document.getElementById 
}
// let win = document.getElementsById("win");
// let loss = document.getElementsById("loss");
// let tie = document.getElementsById("tie");

// let r = 0;
// let p = 1;
// let s = 2;

// function rock() {
//   document.getElementsByClassName('you').innerHtml = 'Rock'
// }
