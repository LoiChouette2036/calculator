function add (number1, number2){
    return number1 + number2;
}

function subtract (number1, number2){
    return number1-number2;
}

function multiply (number1, number2){
    return number1 * number2;
}

function divide (number1, number2){
    return number1 / number2;
}

let firstNumber;
let operator;
let secondNumber;

function operate (number1, number2, operator){
    switch(operator){
        case "/":
            divide(number1,number2);
            break;
        case "*":
            multiply(number1,number2);
            break;
        case "-":
            subtract(number1,number2);
            break;
        case "+":
            add(number1,number2);
            break;
    }
}