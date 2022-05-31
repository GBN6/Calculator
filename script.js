function add(number1, number2)
{
    return number1 + number2;
}
console.log(`Add ${add(215215, 521666436)}`);

function subtract(number1, number2)
{
    return number1 - number2;
}
console.log(`Subtract ${subtract(152105, 6196)}`);

function multiply(number1, number2)
{
    return number1 * number2;
}
console.log(`Multiply ${multiply(560, 40)}`);

function divide(number1, number2)
{
    return number1 / number2;
}
console.log(`Divide ${divide(1000, 10)}`);

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