let tap = document.querySelector(".tap");

tap.addEventListener("click", (e) => {
  e.preventDefault();

  let ball = document.querySelector(".ball");

  // Move up
  ball.style.transform = "translate(-50%, calc(-50% - 150px))";

  // Drop back down after 0.8 seconds
  setTimeout(() => {
    ball.style.transform = "translate(-50%, -10px)";
  }, 800);
});
document.querySelector(".backBtn span").addEventListener("click", () => {
  window.location.href = "index.html"; // redirect to homepage
});
