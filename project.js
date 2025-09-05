console.log("JS loaded!");
let display = document.getElementById("display");
let comments = document.getElementById("comments");

document.querySelectorAll(".keys").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "backspace") {
      display.value = display.value.slice(0, -1);
    } else if (button.dataset.action === "enter") {
      comments.innerHTML += display.value + "<br>";
      display.value = "";
    } else {
      display.value += button.dataset.value;
    }
  });
});
