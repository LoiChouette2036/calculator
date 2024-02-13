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


let firstNumber;
let operator;
let secondNumber;
let operationDisplay="";
let result ;

const resultDisplay = document.getElementById("display");//select element that display result (the rectangle)

const btns = document.querySelectorAll("button");
btns.forEach (btn => {
    btn.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent; //it take the value of button in a string
        const numericValue = parseInt(buttonValue,10);// it converts in a number

        if(isNaN(buttonValue)){
            if (buttonValue === "=" ){
                secondNumber = parseInt(operationDisplay,10);
                //console.log(operate(firstNumber,secondNumber,operator));
                resultDisplay.textContent = operate(firstNumber,secondNumber,operator);
                firstNumber = 0;
                secondNumber = 0;
                operationDisplay = "";
                result = 0;
            } else {
                operator = buttonValue;
                firstNumber = parseInt(operationDisplay,10);
                resultDisplay.textContent = operator;
                operationDisplay = "";
            }

        }

        if(buttonValue >= 0  || buttonValue <= 9){
            operationDisplay += buttonValue;
            resultDisplay.textContent = operationDisplay;
        }

        if (buttonValue === "delete"){
                firstNumber = 0;
                secondNumber = 0;
                operationDisplay = "";
                result = 0;
                resultDisplay.textContent = ""; // to erase everything in the rectangle
        }


        //alert("Valeur numérique du bouton : " + numericValue);
        //resultDisplay.textContent = numericValue;
    })
})