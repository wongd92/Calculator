// display

let tempNum1 = 0;
let tempNum2 = 0;
let operators = ["+", "-", "x", "/"];
let operator = "";
let currentNum = '';
let screenText = document.querySelector('.current-num');
let lastChar = document.querySelectorAll('.btn-1').innerHTML;

document.querySelectorAll('.btn-2').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
        populateDisplay(buttonValue.textContent);
    })
});


document.querySelectorAll('.btn-1').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
        if (screenText.innerText.slice(-1) === "+" || screenText.innerText.slice(-1) === "-" ||
            screenText.innerText.slice(-1) === "x" || screenText.innerText.slice(-1) === "/" ||
            screenText.innerHTML === "&nbsp;") {
                return 1;
        }

        if (buttonValue.textContent === "+") {
            populateDisplay(buttonValue.textContent);
            tempNum1 = currentNum.slice(0, -1);

            operator = operators[0];
        }       

        else if (buttonValue.textContent === "-"){
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0, -1);

            operator = operators[1];
        }

        else if (buttonValue.textContent === "x"){
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0, -1);

            operator = operators[2];
        }

        else if (buttonValue.textContent === "/"){
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0, -1);

            operator = operators[3];
        }

        else if (buttonValue.textContent === "SQRT") {
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0,-1);
            sqrt(parseFloat(tempNum1))
            currentNum = '';
        }

        else if (buttonValue.textContent === "+/-") {
            currentNum = String(currentNum * -1);
            screenText.innerText = currentNum;
        }

        else if (buttonValue.textContent === "%") {
            displayValue = currentNum;
            populateDisplay(buttonValue.textContent);

            tempNum1 = parseFloat(currentNum.slice(0,-1));
            percent(tempNum1);
            currentNum = '';
        }

        else if (buttonValue.textContent === "AC") {
            window.location.reload();
        }

        else if (buttonValue.textContent === "=") {
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1
                || currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
            
                tempNum2 = currentNum.slice(tempNum1.length).replace('+','')
                .replace('-','').replace('x','').replace('/','');
            
                operate(operator, parseFloat(tempNum1), parseFloat(tempNum2));
            }
            
            else {
                return 1;
            }
        }

    })
});

function populateDisplay(number) {
    currentNum += number;
    screenText.innerText = currentNum;
}

// function for add
function addition(x,y) {
    return screenText.innerText = x+y;
}

// function for subtract
function subtract(x,y) {
    return screenText.innerText = x-y;
}
// function for multiply
function multiply(x,y) {
    return screenText.innerText = x*y;
}

// function for divide
function divide(x,y){
    return screenText.innerText = x/y;
}

// function for sqrt
function sqrt(x) {
    return screenText.innerText = Math.sqrt(x);
}

function percent(x){
    return screenText.innerText = x / 100.0;
}

// operate function

function operate(operator, num1, num2) {
    if (operator === "+") {
        addition(num1, num2);
        currentNum = '';
    }

    else if (operator === "-"){
        subtract(num1, num2);
        currentNum = '';
    }

    else if(operator === "x"){
        multiply(num1, num2);
        currentNum = '';
    }

    else if (operator === "/") {
        divide(num1, num2);
        currentNum = '';
    }
}