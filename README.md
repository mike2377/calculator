# 📱 iPhone Calculator - Web Clone

A recreation of the iPhone calculator, built from scratch using HTML5, CSS3, and Vanilla JavaScript.  
This project replicates Apple calculator design and a polished dark theme.

---

## 🎯 Project Goals

This project aims to:

- Practice semantic HTML5 and CSS without any frameworks
- Replicate a professional design with precision
- Build a fully functional calculator with JavaScript
- Implement responsive font scaling for large numbers
- Develop attention to detail in spacing, typography, and color

---

## 🧮 Features Included

- **Basic Operations**: Addition, subtraction, multiplication, division
- **Percentage Calculation**: Quick percentage conversion
- **Sign Toggle**: Switch between positive and negative numbers
- **Decimal Support**: Proper decimal handling with single decimal point
- **Operation Display**: Shows current operation and previous number
- **Operator Highlighting**: Visual feedback when an operator is selected
- **Error Handling**: Division by zero returns "Error"
- **Number Formatting**: Comma separation for thousands
- **Dynamic Font Scaling**: Font size adjusts for large numbers

---

## 🛠 Tech Stack

### Languages

- HTML5
- CSS3
- JavaScript (ES6)

### Other Tools

- Git & GitHub
- VS Code

---

## 🖥 Key Features

- **Calculator Display**: Shows current input with thousands separators
- **Operation Display**: Shows pending operations (e.g., "5 +")
- **Full Button Set**: AC, +/-, %, ÷, ×, −, +, =, numbers 0-9, decimal point
- **Responsive Design**: Adapts to different screen sizes

---

## 📐 Design Reference

Inspired by Apple's iPhone calculator app design:

- Dark theme with black background
- Orange accent for operators
- Circular buttons with consistent spacing
- Clean, minimalistic typography

---

## 📷 Page Preview

### Desktop View

![Calculator Desktop](assets/images/Macbook-Air-127.0.0.1.png)

### Mobile View

![Calculator Mobile](assets/images/iPhone-13-PRO-127.0.0.1.png)

### Calculator in Action

![Calculator Operation](assets/images/Galaxy-S22+-127.0.0.1.png)

---

## 📂 Project Structure

```text
calculator/
├── assets
│   └── images
│       ├── Galaxy-S22+-127.0.0.1.png
│       ├── iPhone-13-PRO-127.0.0.1.png
│       └── Macbook-Air-127.0.0.1.png
├── index.html
├── README.md
├── script.js
└── style.css
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/mike2377/calculator.git
cd calculator
```

Open the project in your browser:

```bash
# Simply open index.html in any browser
open index.html
```

---

## 🧠 Challenges Faced

- **Number Formatting**: I needed thousands separators (1234567 → 1,234,567) but whitout touching the decimal point. I split the nmber at `.`, apply the regular expression `/\B(?=(\d{3})+(?!\d))/g` only on the integer part, then join both parts back.
- **Three-tier font scaling**: The display must shrink as numbers grow, like the real iPhone calculator. I use three breakpoints based on character count: 80px (≤7 chars), 65px (8-9 chars), 50px (10+ chars). Checked on every screen update.
- **Operator highlighting state**: When you tap an operator, it turns white/orange. When you type a new number, the highlight must disappear. I toggle an `.active` class via `highlightOperator()` and call `clearHighlight()` in the button click handler after `inputNumber()` so chaining works correctly.
- **Operation chaining**: Pressing `5 + 3 -` computes `5 + 3 = 8` first, then stores `-`. I track `previousInput`, `currentInput`, and `operation` separately, and calculate the intermediate result inside `handleOperator()` before storing the new operator.
- **Floating point precision**: `0.1 + 0.2 = 0.30000000000000004` in JS. I round every result to 10 decimals with `Math.round(result * 1e10) / 1e10`.

---

## 📚 What I Learned

- How to build a complete calculator with proper operation chaining
- Implementing dynamic font scaling for better UX
- Handling edge cases (division by zero, multiple decimals)
- CSS Grid for perfect button layout

---

## 🧪 Testing

The calculator has been tested for:

- ✅ Basic arithmetic operations
- ✅ Operation chaining
- ✅ Decimal point handling
- ✅ Division by zero error
- ✅ Negative number conversion
- ✅ Percentage calculation
- ✅ Number formatting with commas
- ✅ Font scaling for large numbers
- ✅ Operator highlighting

---

## 👨🏽‍💻 Author

**Kembou Keumoe Ivan Michael**  
Junior Fullstack Developer  
📩 Email: <kman39457@email.com>

🌍 Based in Cameroon | Open to remote opportunities
