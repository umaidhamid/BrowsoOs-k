let result = document.querySelector("#result");
let values = document.querySelectorAll(".btn");

values.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let value = e.target.innerText;
    console.log(value);
    if (value === "C") {
      result.value = "";
    } else if (value === "=") {
      try {
        result.value = math.evaluate(`${result.value}`);
      } catch {
        result.value = "Error";
      }
    } else {
      result.value += value;
    }
  });
});
document.querySelector("span").addEventListener("click", () => {
  window.location.href = "index.html";
});
