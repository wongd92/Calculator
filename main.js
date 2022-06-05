// display

let tempNum1 = 0;
let tempNum2 = 0;
let sqrtNum = 0;
let returnNum = '';
let negNum = 0;
let operators = ["+", "-", "x", "/", "SQRT", "%"];
let operator = "";
let currentNum = '';
let screenText = document.querySelector('.current-num');
let savedText = document.querySelector('.saved-num');
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
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0, -1);

            operator = operators[1];
        }

        else if (buttonValue.textContent === "x"){
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0, -1);
            operator = operators[2];
        }

        else if (buttonValue.textContent === "/"){
            populateDisplay(buttonValue.textContent);

            tempNum1 = currentNum.slice(0, -1);

            operator = operators[3];
        }

        else if (buttonValue.textContent === "SQRT") {
            if (currentNum === '') {
                sqrtNum = tempNum2;
                sqrt(sqrtNum);
            }

            else {
                sqrtNum = currentNum;
                console.log(sqrtNum);
                sqrt(sqrtNum);
            }
        }

        else if (buttonValue.textContent === "+/-") {
            negNum = currentNum;
            plusMinus(negNum);
        }

        else if (buttonValue.textContent === "%") {
            populateDisplay(buttonValue.textContent);

            tempNum1 = parseFloat(currentNum.slice(0,-1));
            percent(tempNum1);
        }

        else if (buttonValue.textContent === "AC") {
            window.location.reload();
        }

        else if (buttonValue.textContent === "=") {
            if (currentNum[0] === operators[0] || currentNum[0] === operators[1] ||
                currentNum[0] === operators[2] || currentNum[0] === operators[3] ||
                currentNum[0] === operators[4] || currentNum[0] === operators[5]) {
                    tempNum2 = currentNum.replace('+','').replace('-','').replace('x','').replace('/','')
                    .replace('SQRT','').replace("%", '');
                    operate(operator, parseFloat(returnNum), parseFloat(tempNum2));
                    console.log("return: " + returnNum, "temp2: " + tempNum2);
            }

            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1 || 
                currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
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
    if (currentNum.length > 16) {
        return 1;
    }

    else {
        currentNum += number;
        screenText.innerText = currentNum;
    }
}

// function for add
function addition(x,y) {
    currentNum = '';
    returnNum = x+y;
    screenText.innerText = returnNum;
    return returnNum;
}

// function for subtract
function subtract(x,y) {
    currentNum = '';
    returnNum = x-y;
    screenText.innerText = returnNum;
    return returnNum;
}
// function for multiply
function multiply(x,y) {
    currentNum = '';
    returnNum = x*y;
    screenText.innerText = returnNum;
    return returnNum;
}

// function for divide
function divide(x,y){
    currentNum = '';
    returnNum = x/y;
    screenText.innerText = returnNum;
    return returnNum;
}

// function for sqrt
function sqrt(x) {
    sqrtNum = Math.sqrt(x);
    screenText.innerText = sqrtNum;            
    tempNum2 = sqrtNum;
    currentNum = '';
}

function percent(x){
    currentNum = '';
    returnNum = x / 100.0;
    screenText.innerText = returnNum;
    return returnNum;
}

function plusMinus(x) {
    currentNum = '';
    returnNum = x * -1;
    screenText.innerText = returnNum;
    return returnNum;
}

// operate function

function operate(operator, num1, num2) {
    if (operator === "+") {
        addition(num1, num2);
    }

    else if (operator === "-"){
        subtract(num1, num2);
    }

    else if(operator === "x"){
        multiply(num1, num2);
    }

    else if (operator === "/") {
        divide(num1, num2);
    }
}