var string = "";
const buttonEl = document.querySelectorAll("#btn");
const inputEl = document.getElementById("inp");
Array.from(buttonEl).forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputEl.value = string;
    } else if (e.target.innerHTML == "AC") {
      inputEl.value = "";
    } else {
      string = string + e.target.innerHTML;
      inputEl.value = string;
    }
  });
});
