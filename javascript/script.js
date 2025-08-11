document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // stop default right-click menu

  let menu = document.querySelector(".menu");

  menu.style.top = `${event.clientY}px`; // vertical position
  menu.style.left = `${event.clientX}px`; // horizontal position
  menu.style.display = "flex"; // show menu
  console.log("Right click detected at:", event.clientX, event.clientY);
});

// Hide menu on left click
document.addEventListener("click", () => {
  document.querySelector(".menu").style.display = "none";
});

// Simple wallpaper array
const wallpaper = [
  "images/wallpaper/wallpaper1.webp",
  "images/wallpaper/wallpaper2.webp",
  "images/wallpaper/wallpaper3.webp",
  "images/wallpaper/wallpaper4.webp",
  "images/wallpaper/wallpaper5.webp",
];

let currentWallpaper = 0; // Keep track of current wallpaper

// Simple wallpaper change function
function changeWallpaper() {
  // Go to next wallpaper
  currentWallpaper = (currentWallpaper + 1) % wallpaper.length;

  // Apply the new wallpaper
  document.querySelector(
    "#b-kimage"
  ).style.backgroundImage = `url('${wallpaper[currentWallpaper]}')`;

  // Show simple message
  console.log(`Wallpaper changed to: ${wallpaper[currentWallpaper]}`);
}

// Add click event to wallpaper button
let wallpaperButton = document.querySelector(".change-Wallpaper");
wallpaperButton.addEventListener("click", (e) => {
  e.preventDefault();
  changeWallpaper();
});

// Theme change function
function changeTheme() {
  let taskbar = document.querySelector(".taskbar");
  let timeDate = document.querySelector(".TimeDate");

  // Simple toggle between white and grey
  if (taskbar.style.backgroundColor === "white") {
    taskbar.style.backgroundColor = "grey";
    timeDate.style.color = "white";
  } else {
    taskbar.style.backgroundColor = "white";
    timeDate.style.color = "black";
  }
}

// Add click event to theme button
let themeButton = document.querySelector(".Change-theme");
themeButton.addEventListener("click", (e) => {
  e.preventDefault();
  changeTheme();
});

// Simple app launcher functions
function openCalculator() {
  window.location.href = "calculator.html";
}

function openGame() {
  window.location.href = "bouncingBall.html";
}

function openNotes() {
  window.location.href = "notes.html";
}

function openCountCharacters() {
  window.location.href = "Countcharacter.html";
}
function TikTakToe() {
  window.location.href = "tik-tak-toe.html";
}
// Add double-click events to apps
document
  .querySelector(".calculator")
  .addEventListener("dblclick", openCalculator);
document.querySelector(".game").addEventListener("dblclick", openGame);
document.querySelector(".notes").addEventListener("dblclick", openNotes);
document
  .querySelector(".countcharacters")
  .addEventListener("dblclick", openCountCharacters);
document.querySelector(".tik-tak-toe").addEventListener("dblclick", TikTakToe);
