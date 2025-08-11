let values = document.querySelectorAll(".box");
let user = true; // true for 1 and false for 2
let GameOver = false;
let newGame = document.querySelector(".NewGame");
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
values.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (GameOver) {
      return;
    }

    if (!element.dataset.clicked) {
      if (user) {
        element.classList.add("player1");
        element.textContent = "X";
        element.dataset.clicked = true;
        user = false;
      } else {
        element.classList.add("player2");
        element.textContent = "O";
        element.dataset.clicked = true;
        user = true;
      }

      for (let line of lines) {
        let [a, b, c] = line;

        if (
          values[a].innerText === "X" &&
          values[b].innerText === "X" &&
          values[c].innerText === "X"
        ) {
          document.querySelector("h1").innerText = "User 1 Winner";
          newGame.textContent = "New Game";
          GameOver = true;
        }

        if (
          values[a].innerText === "O" && // changed from "Y" to "O"
          values[b].innerText === "O" &&
          values[c].innerText === "O"
        ) {
          document.querySelector("h1").innerText = "User 2 Winner";
          newGame.textContent = "New Game";
          GameOver = true;
        }
      }
    }
  });
});

function Winner(values) {
  values.forEach((element) => {
    element.innerText = "";
    element.classList.remove("player1", "player2");
    element.dataset.clicked = "";
    element.style.color = ""; // Reset color
  });
}
newGame.addEventListener("click", () => {
  Winner(values);
  GameOver = false;
  user = true;
  document.querySelector("h1").innerText = "Tik Tac Toe"; // Reset heading
  newGame.textContent = "Reset"; // Reset button label
});
document.querySelector(".Back").addEventListener("click", () => {
  window.location.href = "index.html";
});
