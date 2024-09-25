const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = ''; 
let previousInput = '';
let operator = null; 
let shouldResetDisplay = false; 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'C') {
            clearCalculator();
        } else if (value === '=') {
            if (operator && previousInput !== '' && currentInput !== '') {
                currentInput = calculate(previousInput, currentInput, operator);
                display.value = currentInput;
                operator = null;
                previousInput = '';
                shouldResetDisplay = true;
            }
        } else if (button.classList.contains('operator')) {
            if (currentInput !== '') {
                if (operator && previousInput !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.value = currentInput;
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            if (shouldResetDisplay) {
                currentInput = '';
                shouldResetDisplay = false;
            }
            currentInput += value;
            display.value = currentInput;
        }
    });
});


function calculate(num1, num2, operator) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return (n1 + n2).toString();
        case '-':
            return (n1 - n2).toString();
        case '*':
            return (n1 * n2).toString();
        case '/':
            return n2 === 0 ? 'Error' : (n1 / n2).toString();
        default:
            return num2;
    }
}


function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.value = '';  
}
