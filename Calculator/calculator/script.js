const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'AC') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            if (operator && previousInput) {
                currentInput = calculate(previousInput, currentInput, operator);
                display.value = currentInput;
                operator = '';
            }
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            if (currentInput) {
                if (previousInput && operator) {
                    previousInput = calculate(previousInput, currentInput, operator);
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return (a / b).toString();
        case '%':
            return (a % b).toString();
        default:
            return '';
    }
}
