let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let firstOperand = null;
let secondOperand = false;

function updateDisplay() {
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    firstOperand = null;
    secondOperand = false;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || secondOperand) {
        currentInput = number.toString();
        secondOperand = false;
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator && !secondOperand) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(currentInput);
    secondOperand = true;
    updateDisplay();
}

function calculate() {
    if (operator && !secondOperand) {
        let result;
        let secondOperandValue = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = firstOperand + secondOperandValue;
                break;
            case '-':
                result = firstOperand - secondOperandValue;
                break;
            case '*':
                result = firstOperand * secondOperandValue;
                break;
            case '/':
                result = firstOperand / secondOperandValue;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        firstOperand = null;
        secondOperand = false;
        updateDisplay();
    }
}
