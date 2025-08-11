let resizeBox = document.querySelector(".resize");
let menuBar = document.querySelector(".resizeMenu");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

menuBar.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - resizeBox.offsetLeft;
  offsetY = e.clientY - resizeBox.offsetTop;
  document.body.style.userSelect = "none"; // avoid text selection
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "auto";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  resizeBox.style.left = `${e.clientX - offsetX}px`;
  resizeBox.style.top = `${e.clientY - offsetY}px`;
});
document.querySelector(".cross").addEventListener("click", (e) => {
  e.preventDefault();
  resizeBox.style.display = "none";
  document.querySelector(".document").style.display = "none";
});

document.querySelector(".my-pc").addEventListener("dblclick", (e) => {
  e.preventDefault();
  resizeBox.style.display = "flex";
  document.querySelector(".document").style.display = "initial";
});
// only large screen
let bodyDisplay = getComputedStyle(document.querySelector("body")).display;
if (bodyDisplay === "none") {
  alert("Access to this site is not supported on small-screen devices.");
}
document.querySelector(".PortFolio-Link").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Link unavailable");
});
