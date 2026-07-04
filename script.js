//variables
let currentInput = "0";
let previousInput = "";
let operation = null;

//get elements
const screen = document.getElementById("screen");
const operationDisplay = document.getElementById("operationdisplay");
const buttons = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll(".operator");

//update screen
function updateScreen() {
  let displayValue = currentInput;

  if (!isNaN(parseFloat(displayValue))) {
    let parts = displayValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    displayValue = parts.join(".");
  }

  if (displayValue.length > 9) {
    screen.style.fontSize = "50px";
  } else if (displayValue.length > 7) {
    screen.style.fontSize = "65px";
  } else {
    screen.style.fontSize = "80px";
  }

  screen.textContent = displayValue;
}
