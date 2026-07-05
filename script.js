//  variables
let currentInput = '0'
let previousInput = ''
let operation = null
let shouldResetScreen = false

// get elements
const screen = document.getElementById('screen')
const operationDisplay = document.getElementById('operationdisplay')
const buttons = document.querySelectorAll('.btn')
const operatorButtons = document.querySelectorAll('.operator')

// update screen
function updateScreen () {
  let displayValue = currentInput

  if (!isNaN(parseFloat(displayValue))) {
    const parts = displayValue.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    displayValue = parts.join('.')
  }

  if (displayValue.length > 9) {
    screen.style.fontSize = '50px'
  } else if (displayValue.length > 7) {
    screen.style.fontSize = '65px'
  } else {
    screen.style.fontSize = '80px'
  }

  screen.textContent = displayValue
}

// update operation display
function updateOperationDisplay () {
  if (operation !== null && previousInput !== '') {
    operationDisplay.textContent = `${previousInput} ${operation}`
  } else {
    operationDisplay.textContent = ''
  }
}

// input number
function inputNumber (number) {
  if (currentInput === '0' || shouldResetScreen) {
    currentInput = number
    shouldResetScreen = false
  } else {
    if (currentInput.replace(/[^0-9]/g, '').length >= 9) return
    currentInput += number
  }
  updateScreen()
}

// input comma
function inputDecimal () {
  if (shouldResetScreen) {
    currentInput = '0.'
    shouldResetScreen = false
    updateScreen()
    return
  }
  // only one comma
  if (!currentInput.includes('.')) {
    currentInput += '.'
  }
  updateScreen()
}

// handle operator
function handleOperator (nextOperator) {
  const inputValue = parseFloat(currentInput)

  // if  there is a previous input and an operation, calculate the result
  if (operation !== null && !shouldResetScreen) {
    const result = calculate(parseFloat(previousInput), inputValue, operation)
    currentInput = String(result)
    previousInput = currentInput
    updateScreen()
  } else {
    previousInput = currentInput
  }

  operation = nextOperator
  shouldResetScreen = true
  highlightOperator(nextOperator)
  updateOperationDisplay()
}

// active operator
function highlightOperator (op) {
  operatorButtons.forEach(btn => btn.classList.remove('active'))
  operatorButtons.forEach(btn => {
    if (btn.dataset.value === op) {
      btn.classList.add('active')
    }
  })
}

function clearHighlight () {
  operatorButtons.forEach(btn => btn.classList.remove('active'))
}

// calculate
function calculate (a, b, op) {
  let result = 0
  switch (op) {
    case '+': result = a + b; break
    case '-': result = a - b; break
    case '×': result = a * b; break
    case '÷':
      if (b === 0) return 'Error'
      result = a / b
      break
  }
  // Round to 10 decimal
  return Math.round(result * 1e10) / 1e10
}

// handle equals
function handleEquals () {
  if (operation === null) return

  const inputValue = parseFloat(currentInput)
  const result = calculate(parseFloat(previousInput), inputValue, operation)

  currentInput = String(result)
  operation = null
  previousInput = ''
  shouldResetScreen = true
  clearHighlight()
  updateScreen()
  updateOperationDisplay()
}

// handle AC
function handleClear () {
  currentInput = '0'
  previousInput = ''
  operation = null
  shouldResetScreen = false
  clearHighlight()
  updateScreen()
  updateOperationDisplay()
}

// handle +/-
function handleSign () {
  if (currentInput === '0') return
  if (currentInput.startsWith('-')) {
    currentInput = currentInput.slice(1)
  } else {
    currentInput = '-' + currentInput
  }
  updateScreen()
}

// handle %
function handlePercent () {
  const value = parseFloat(currentInput)
  currentInput = String(value / 100)
  updateScreen()
}

// on-click event
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action
    const value = button.dataset.value

    if (!action) {
      inputNumber(value)
      clearHighlight()
    } else {
      switch (action) {
        case 'decimal':
          inputDecimal()
          break
        case 'operator':
          handleOperator(value)
          break
        case 'equals':
          handleEquals()
          break
        case 'clear':
          handleClear()
          break
        case 'sign':
          handleSign()
          break
        case 'percent':
          handlePercent()
          break
      }
    }
  })
})

// initial display
updateScreen()
updateOperationDisplay()
