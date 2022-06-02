const number = document.querySelectorAll('.btn-number');
const currentDisplay = document.querySelector('.current-number-input');
const operator = document.querySelectorAll('.btn-oper');
const typedNumbers = document.querySelector('.saved-number');
const clearEf = document.querySelector('.btn-clear-eff')
const clearDisplay = document.querySelector('.btn-clear-displey');
const backspace = document.querySelector('.btn-backspace');
let displayValue = 0;
let firstNumber = null;
let secondNumber = null;
console.log(displayValue);
let calculated = false;

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
    if (number2 === "0") 
    {
        firstNumber = null;
        return "ERROR" 
    }
    else { return Math.round((+number1 / +number2) * 100) / 100; }
}

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
        console.log(`firstNumber in display ${firstNumber}`)
        console.log(`display value ${currentDisplay.textContent}`);

        currentNumber = e.target.textContent;
        currentDisplay.textContent === '0' ? currentDisplay.textContent = currentNumber : currentDisplay.textContent += currentNumber;
        displayValue = currentDisplay.textContent;
        return displayValue;
    }
}

function calculate(e)
{

    currentOperator = e.target.textContent;
    switch(currentOperator) 
    {
        case '+':
            saveOperator = e.target.textContent
            if (firstNumber === null)
            {
                firstNumber = displayValue;
                currentDisplay.textContent = '0';
                typedNumbers.textContent += `${firstNumber} + `;
            }
            else if (firstNumber !== null)
            {
                secondNumber = displayValue;
                typedNumbers.textContent += `${secondNumber} + `;
                currentDisplay.textContent = operate(firstNumber, secondNumber, currentOperator);
                firstNumber = operate(firstNumber, secondNumber, currentOperator);
                displayValue = firstNumber;
                calculated = true;
            }
            break;

        case '-':
            saveOperator = e.target.textContent
            if (firstNumber === null)
            {
                firstNumber = displayValue;
                currentDisplay.textContent = '0';
                typedNumbers.textContent += `${firstNumber} - `;
            }
            else if (firstNumber !== null)
            {
                secondNumber = displayValue;
                typedNumbers.textContent += `${secondNumber} - `;
                currentDisplay.textContent = operate(firstNumber, secondNumber, currentOperator);
                firstNumber = operate(firstNumber, secondNumber, currentOperator);
                displayValue = firstNumber;
                calculated = true;
            }
            break;

        case '*':
            saveOperator = e.target.textContent
            if (firstNumber === null)
            {
                firstNumber = displayValue;
                currentDisplay.textContent = '0';
                typedNumbers.textContent += `${firstNumber} * `;
            }
            else if (firstNumber !== null)
            {
                secondNumber = displayValue;
                typedNumbers.textContent += `${secondNumber} * `;
                currentDisplay.textContent = operate(firstNumber, secondNumber, currentOperator);
                firstNumber = operate(firstNumber, secondNumber, currentOperator);
                displayValue = firstNumber;
                calculated = true;
            }
            break;

        case '/':
            saveOperator = e.target.textContent
            if (firstNumber === null)
            {
                firstNumber = displayValue;
                currentDisplay.textContent = '0';
                typedNumbers.textContent += `${firstNumber} / `;
            }
            else if (firstNumber !== null)
            {
                secondNumber = displayValue;
                typedNumbers.textContent += `${secondNumber} / `;
                currentDisplay.textContent = operate(firstNumber, secondNumber, currentOperator);
                firstNumber = operate(firstNumber, secondNumber, currentOperator);
                displayValue = firstNumber;
                calculated = true;
            }
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

number.forEach(element => element.addEventListener('click', displayNumber));
operator.forEach(element => element.addEventListener('click', calculate));
clearEf.addEventListener('click', clear);
clearDisplay.addEventListener('click', clearDisp)
backspace.addEventListener('click', characterClear)

