// visible wallpaer only
const taskItem3 = document.querySelector(".taskitems3");
const apps = document.querySelector(".apps-container");
const taskbar = document.querySelector(".taskbar");

if (taskItem3) {
  taskItem3.addEventListener("mouseenter", () => {
    apps.style.opacity = "0";
    taskbar.style.opacity = "0";
  });

  taskItem3.addEventListener("mouseleave", () => {
    apps.style.opacity = "1";
    taskbar.style.opacity = "1";
  });
}
function SetDateAndTime() {
  let date = new Date();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");

  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();

  let span1 = document.querySelector(".span1"); // time
  let span2 = document.querySelector(".span2"); // date

  let currentTime = `${hours}:${minutes}:${seconds}`;
  let currentDate = `${day}-${month}-${year}`;

  if (span1) span1.textContent = currentTime;
  if (span2) span2.textContent = currentDate;
}

// run immediately
SetDateAndTime();

// update every second
setInterval(SetDateAndTime, 1000);
let windowsScreen = document.querySelector(".windowsScreen");
let windowspanel = document.querySelector(".windowBtn");

windowspanel.addEventListener("click", (e) => {
  e.preventDefault();
  windowsScreen.style.display = "flex"; // show the panel
});

window.addEventListener("click", (e) => {
  // If the click is outside both the panel and the button
  if (!windowsScreen.contains(e.target) && !windowspanel.contains(e.target)) {
    windowsScreen.style.display = "none"; // hide the panel
  }
});
