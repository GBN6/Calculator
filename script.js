const number = document.querySelectorAll('.btn-number');
const currentDisplay = document.querySelector('.current-number-input');
let displayValue = {};
console.log(displayValue);

function add(number1, number2)
{
    return number1 + number2;
}

function subtract(number1, number2)
{
    return number1 - number2;
}

function multiply(number1, number2)
{
    return number1 * number2;
}

function divide(number1, number2)
{
    return number1 / number2;
}

function operate(number1, number2, operator)
{
    switch(operator) 
    {
        case '+':
            add(number1, number2)
            break;
        case '-':
            subtract(number1, number2)
            break;
        case '*':
            multiply(number1, number2)
            break;
        case '/':
            divide(number1, number2)
            break;            
    }  
}
function displayNumber(e)
{
    if (currentDisplay.textContent.length < 18)
    {
        currentNumber = e.target.textContent;
        currentDisplay.textContent === '0' ? currentDisplay.textContent = currentNumber : currentDisplay.textContent += currentNumber;
        displayValue = currentDisplay.textContent;
        console.log(displayValue);
        return displayValue;
    }
}

number.forEach(element => element.addEventListener('click', displayNumber));
