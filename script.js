const number = document.querySelectorAll('.btn-number');
const currentDisplay = document.querySelector('.current-number-input');

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
    currentNumber = e.target.textContent;
    currentDisplay.textContent === '0' ? currentDisplay.textContent = currentNumber : currentDisplay.textContent += currentNumber;
}

number.forEach(element => element.addEventListener('click', displayNumber));
