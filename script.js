//  variables
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

// get elements
const screen = document.getElementById('screen');
const operationDisplay = document.getElementById('operationdisplay');
const buttons = document.querySelectorAll('.btn');
const operatorButtons = document.querySelectorAll('.operator');

// update screen
function updateScreen() {
  let displayValue = currentInput;

  if (!isNaN(parseFloat(displayValue))) {
    let parts = displayValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    displayValue = parts.join('.');
  }

  if (displayValue.length > 9) {
    screen.style.fontSize = '50px';
  } else if (displayValue.length > 7) {
    screen.style.fontSize = '65px';
  } else {
    screen.style.fontSize = '80px';
  }

  screen.textContent = displayValue;
}

// update operation display
function updateOperationDisplay() {
  if (operation !== null && previousInput !== '') {
    operationDisplay.textContent = `${previousInput} ${operation}`;
  } else {
    operationDisplay.textContent = '';
  }
}

// input number
function inputNumber(number) {
  if (currentInput === '0' || shouldResetScreen) {
    currentInput = number;
    shouldResetScreen = false;
  } else {
    if (currentInput.replace(/[^0-9]/g, "").length >= 9) return;
    currentInput += number;
  }
  updateScreen();
}

// input comma
function inputDecimal() {
  if (shouldResetScreen) {
    currentInput = '0.';
    shouldResetScreen = false;
    updateScreen();
    return;
  }
  // only one comma
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateScreen();
}
