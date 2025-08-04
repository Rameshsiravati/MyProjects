const rollButton = document.getElementById("roll-button");
const diceDisplay = document.getElementById("dice");
const rollHistory = document.getElementById("roll-history");

let historyList = [];

rollButton.addEventListener("click", () => {
  diceDisplay.classList.add("roll-animation");

  setTimeout(() => {
    diceDisplay.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  const face = getDiceFace(roll);
  diceDisplay.innerHTML = face;
  historyList.push(roll);
  updateRollHistory();
}

function getDiceFace(value) {
  const faces = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
  return faces[value - 1];
}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  historyList.forEach((roll, index) => {
    const li = document.createElement("li");
    li.innerHTML = `Roll ${index + 1}: <span>${getDiceFace(roll)}</span>`;
    rollHistory.appendChild(li);
  });
}
