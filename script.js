const number = document.querySelectorAll('.btn-number');
const currentDisplay = document.querySelector('.current-number-input');
const operator = document.querySelectorAll('.btn-oper');
const typedNumbers = document.querySelector('.saved-number');
const clearEf = document.querySelector('.btn-clear-eff')
const clearDisplay = document.querySelector('.btn-clear-displey');
const backspace = document.querySelector('.btn-backspace');
const dot = document.querySelector('.btn-dot');

let displayValue = 0;
let firstNumber = null;
let secondNumber = null;
console.log(displayValue);
let calculated = false;

//Basic Math functions
function add(number1, number2)
{
    return Math.round((+number1 + +number2) * 100) / 100;
}

function subtract(number1, number2)
{
    return Math.round((+number1 - +number2) * 100) / 100;
}

function multiply(number1, number2)
{
    return Math.round((+number1 * +number2) * 100) / 100;
}

function divide(number1, number2)
{
    //check if divide by 0
    if (number2 === "0") 
    {
        calculated = true;
        return "ERROR" 
    }
    else { return Math.round((+number1 / +number2) * 100) / 100; }
}

//Call basic math function based on operator
function operate(number1, number2, operator)
{
    switch(operator) 
    {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);      
    }  
}

//Display numbers on screen, check for length 
function displayNumber(e)
{
    operator.forEach(element => element.addEventListener('click', calculate));
    if (calculated)
    {
        currentDisplay.textContent = '';
        calculated = false;
    }
    if (currentDisplay.textContent.length < 18)
    {
        currentNumber = e.target.textContent;
        currentDisplay.textContent === '0' ? currentDisplay.textContent = currentNumber : currentDisplay.textContent += currentNumber;
        displayValue = currentDisplay.textContent;
        return displayValue;
    }
}

//Function calculating inputed numbers
function calculation(op)
{
        if (firstNumber === null)
            {
                previousOperator = op;
                firstNumber = displayValue;
                displayValue = '0';
                currentDisplay.textContent = '0';
                typedNumbers.textContent += `${firstNumber} ${op} `;
            }
        else if (firstNumber !== null)
            {
                if (previousOperator === currentOperator)
                {                
                    secondNumber = displayValue;
                    typedNumbers.textContent += `${secondNumber} ${op} `;
                    currentDisplay.textContent = operate(firstNumber, secondNumber, currentOperator);
                    firstNumber = operate(firstNumber, secondNumber, currentOperator);
                    displayValue = firstNumber;
                    calculated = true;
                }
                else 
                {
                    secondNumber = displayValue;
                    typedNumbers.textContent += `${secondNumber} ${op} `;
                    currentDisplay.textContent = operate(firstNumber, secondNumber, previousOperator);
                    firstNumber = operate(firstNumber, secondNumber, previousOperator);
                    displayValue = firstNumber;
                    previousOperator = currentOperator;
                    calculated = true;
                }
            }
}


function calculate(e)
{
    if (currentDisplay.textContent === 'ERROR')
    {
        clear();
    }

    currentOperator = e.target.textContent;
    switch(currentOperator) 
    {
        case '+':
            saveOperator = e.target.textContent
            calculation('+');
            break;

        case '-':
            saveOperator = e.target.textContent
            calculation('-');
            break;

        case '*':
            saveOperator = e.target.textContent;
            calculation('*');
            break;

        case '/':
            saveOperator = e.target.textContent;
            calculation('/');
            break;

        case '=':
            if (firstNumber !== null)
            {
                secondNumber = displayValue;
                typedNumbers.textContent += `${secondNumber} = `;
                currentDisplay.textContent = operate(firstNumber, secondNumber, saveOperator);
                displayValue = currentDisplay.textContent;
                firstNumber = null;
                secondNumber = null;
                calculated = true;
            }
            break;
    }
}

function clear()
{
    firstNumber = null
    secondNumber = null
    displayValue = '0';
    currentDisplay.textContent = '0';
    typedNumbers.textContent = '';
} 

function clearDisp()
{
    currentDisplay.textContent = '0'
    displayValue = '0';
}

function characterClear()
{
    if (currentDisplay.textContent.length > 1)
    {
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
        displayValue = currentDisplay.textContent;
        return displayValue;
    }
    else currentDisplay.textContent = '0'; 
}

function decimals()
{
    calculated = false;
    if (!currentDisplay.textContent.includes('.'))
    {
        currentDisplay.textContent = currentDisplay.textContent + '.';
    }
}

number.forEach(element => element.addEventListener('click', displayNumber));
operator.forEach(element => element.addEventListener('click', calculate));
clearEf.addEventListener('click', clear);
clearDisplay.addEventListener('click', clearDisp);
backspace.addEventListener('click', characterClear);
dot.addEventListener('click', decimals);

