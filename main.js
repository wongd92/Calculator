// display

let tempNum1 = 0;
let tempNum2 = 0;
let currentNum = '';
let displayValue = '';
let text = document.querySelector('.current-num');
let lastChar = document.querySelectorAll('.btn-1').innerHTML;
let operator = "";
let counter = 0;


document.querySelectorAll('.btn-2').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
        populateDisplay(buttonValue.textContent);
    })
});


document.querySelectorAll('.btn-1').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
        if (text.innerText.slice(-1) === "+" || text.innerText.slice(-1) === "-" ||
            text.innerText.slice(-1) === "x" || text.innerText.slice(-1) === "/" ||
            text.innerHTML === "&nbsp;") {
                return 1;
        }

        if (buttonValue.textContent === "+") {
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);
            tempNum1 = parseInt(currentNum.slice(0, counter-1));
            counter = 0;

            operator = "+";
        }       

        else if (buttonValue.textContent === "-"){
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = parseInt(currentNum.slice(0, counter-1));
            counter = 0;

            operator = "-";
        }

        else if (buttonValue.textContent === "x"){
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = parseInt(currentNum.slice(0, counter-1));
            counter = 0;

            operator = "x";
        }

        else if (buttonValue.textContent === "/"){
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = parseInt(currentNum.slice(0, counter-1));
            counter = 0;

            operator = "/";
        }

        else if (buttonValue.textContent === "=") {
            tempNum2 = parseInt(currentNum.slice(counter).replace('+','')
            .replace('-','').replace('x','').replace('/',''));
            
            operate(operator, tempNum1, tempNum2);
        }

        else {
            populateDisplay(buttonValue.textContent);
        }
    })
});

function populateDisplay(number) {
    currentNum += number;
    text.innerText = currentNum;

    counter++;
}

// function for add
function addition(x,y) {
    return text.innerText = x+y
}

// function for subtract
function subtract(x,y) {
    return text.innerText = x-y;
}
// function for multiply
function multiply(x,y) {
    return text.innerText = x*y;
}

// function for divide
function divide(x,y){
    return text.innerText = x/y;
}

// operate function

function operate(operator, num1, num2) {
    if (operator === "+") {
        addition(num1, num2);
        currentNum = '';
        console.log(addition(num1, num2));
        console.log(currentNum);
    }

    else if (operator === "-"){
        subtract(num1, num2);
        currentNum = '';
    }

    else if(operator === "x"){
        multiply(num1, num2);
        currentNum = '';
    }

    else {
        divide(num1, num2);
        currentNum = '';
    }
}