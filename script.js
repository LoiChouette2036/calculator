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
            return divide(number1,number2);
        case "*":
            return multiply(number1,number2);
        case "-":
            return subtract(number1,number2);
        case "+":
            return add(number1,number2);
        default : 
            console.log("it's not working");
    }
}

const resultDisplay = document.getElementById("display");//select element that display result (the rectangle)

const btns = document.querySelectorAll("button");
btns.forEach (btn => {
    btn.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent; //it take the value of button in a string
        const numericValue = parseInt(buttonValue,10);// it converts in a number

        //alert("Valeur numérique du bouton : " + numericValue);
        resultDisplay.textContent = numericValue;
    })
})