// display

let tempNum1 = 0;
let tempNum2 = 0;
let sqrtNum = 0;
let negNum = 0;
let returnNum = '';
let operators = ["+", "-", "x", "/", "."];
let operator = "";
let currentNum = '';
let screenText = document.querySelector('.current-num');
let savedText = document.querySelector('.saved-num');
let lastChar = document.querySelectorAll('.btn-1').innerHTML;

// Immediately update screen and display value for each number (0-9) only
document.querySelectorAll('.btn-2').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
            populateDisplay(buttonValue.textContent);
    })
});

// Logic for running through operators and handling subsequent equations
document.querySelectorAll('.btn-1').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
        // Value only displays if it begins with a number
        if (screenText.innerText.slice(-1) === "+" || screenText.innerText.slice(-1) === "-" ||
            screenText.innerText.slice(-1) === "x" || screenText.innerText.slice(-1) === "/" ||
            screenText.innerHTML === "&nbsp;") {
                return 1;
        }

        // Save values of each operand and operator for calculation logic
        if (buttonValue.textContent === "+") {
            // Logic to restrict multiple operators from being clicked in succession
            // Logic to process a single pair of numbers at a time while handling mutliple operators
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) || 
            currentNum.includes(operators[2]) || currentNum.includes(operators[3])){
                if (currentNum[0] === operators[0] || currentNum[0] === operators[1] ||
                    currentNum[0] === operators[2] || currentNum[0] === operators[3]) {
                        savedText.innerText = returnNum + currentNum;
                        tempNum2 = currentNum.replace('+','').replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(returnNum), parseFloat(tempNum2));

                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[0];
                }
    
                // Process the equation by determining operand on right side of a full equation
                else if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1 || 
                    currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
                        savedText.innerText = currentNum;
                        tempNum2 = currentNum.slice(tempNum1.length).replace('+','')
                        .replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(tempNum1), parseFloat(tempNum2));

                        populateDisplay(buttonValue.textContent);
                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[0];
                }
            }

            // Save value for operand on left of operator
            // display operator value on screen
            else {
                populateDisplay(buttonValue.textContent);
                tempNum1 = currentNum.slice(0, -1);
                operator = operators[0];
            }
        }       

        else if (buttonValue.textContent === "-"){
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) || 
            currentNum.includes(operators[2]) || currentNum.includes(operators[3])){
                if (currentNum[0] === operators[0] || currentNum[0] === operators[1] ||
                    currentNum[0] === operators[2] || currentNum[0] === operators[3]) {
                        savedText.innerText = returnNum + currentNum;
                        tempNum2 = currentNum.replace('+','').replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(returnNum), parseFloat(tempNum2));

                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[1];
                }
                
                // Process the equation by determining operand on right side of a full equation
                else if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1 || 
                    currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
                        savedText.innerText = currentNum;
                        tempNum2 = currentNum.slice(tempNum1.length).replace('+','')
                        .replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(tempNum1), parseFloat(tempNum2));

                        populateDisplay(buttonValue.textContent);
                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[1];
                }
            }

            else {
                populateDisplay(buttonValue.textContent);
                tempNum1 = currentNum.slice(0, -1);
                operator = operators[1];
            }
        }

        else if (buttonValue.textContent === "x"){
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) || 
            currentNum.includes(operators[2]) || currentNum.includes(operators[3])){
                if (currentNum[0] === operators[0] || currentNum[0] === operators[1] ||
                    currentNum[0] === operators[2] || currentNum[0] === operators[3]) {
                        savedText.innerText = returnNum + currentNum;
                        tempNum2 = currentNum.replace('+','').replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(returnNum), parseFloat(tempNum2));

                        populateDisplay(buttonValue.textContent);
                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[2];

                }
    
                // Process the equation by determining operand on right side of a full equation
                else if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1 || 
                    currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
                        savedText.innerText = currentNum;
                        tempNum2 = currentNum.slice(tempNum1.length).replace('+','')
                        .replace('-','').replace('x','').replace('/','')
                        operate(operator, parseFloat(tempNum1), parseFloat(tempNum2));

                        populateDisplay(buttonValue.textContent);
                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[2];
                }
            }

            else {
                populateDisplay(buttonValue.textContent);
                tempNum1 = currentNum.slice(0, -1);
                operator = operators[2];
            }
        }

        else if (buttonValue.textContent === "/"){
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) || 
            currentNum.includes(operators[2]) || currentNum.includes(operators[3], operators[4])){
                if (currentNum[0] === operators[0] || currentNum[0] === operators[1] ||
                    currentNum[0] === operators[2] || currentNum[0] === operators[3]) {
                        savedText.innerText = returnNum + currentNum;
                        tempNum2 = currentNum.replace('+','').replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(returnNum), parseFloat(tempNum2));
                }
    
                // Process the equation by determining operand on right side of a full equation
                else if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1 || 
                    currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
                        savedText.innerText = currentNum;
                        tempNum2 = currentNum.slice(tempNum1.length).replace('+','')
                        .replace('-','').replace('x','').replace('/','');
                        operate(operator, parseFloat(tempNum1), parseFloat(tempNum2));

                        populateDisplay(buttonValue.textContent);
                        tempNum1 = currentNum.slice(0, -1);
                        operator = operators[3];
                }
            }

            else {
                populateDisplay(buttonValue.textContent);
                tempNum1 = currentNum.slice(0, -1);
                operator = operators[3];
            }
        }

        else if (buttonValue.textContent === "SQRT") {
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) || 
            currentNum.includes(operators[2]) || currentNum.includes(operators[3], operators[4])){
                return 1;
            }

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

        else if (buttonValue.textContent === ".") {
            if (currentNum.slice(-1) === ".") {
                return 1;
            }

            else {
                populateDisplay(buttonValue.textContent);
                }
            }

        else if (buttonValue.textContent === "%") {
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) || 
            currentNum.includes(operators[2]) || currentNum.includes(operators[3], operators[4])){
                return 1;
            }

            else {
                populateDisplay(buttonValue.textContent);
                tempNum1 = parseFloat(currentNum.slice(0,-1));
                percent(tempNum1);
            }
        }

        else if (buttonValue.textContent === "AC") {
            window.location.reload();
        }

        // Process the equation by removing the operator from display if 
        // calculating an equation utilizing a previous answer
        else if (buttonValue.textContent === "=") {
            if (currentNum[0] === operators[0] || currentNum[0] === operators[1] ||
                currentNum[0] === operators[2] || currentNum[0] === operators[3]) {
                    savedText.innerText = returnNum + currentNum;
                    tempNum2 = currentNum.replace('+','').replace('-','').replace('x','').replace('/','');
                    operate(operator, parseFloat(returnNum), parseFloat(tempNum2));
            }

            // Process the equation by determining operand on right side of a full equation
            if (currentNum.includes(operators[0]) || currentNum.includes(operators[1]) && String(currentNum).length > 1 || 
                currentNum.includes(operators[2]) || currentNum.includes(operators[3])) {
                    savedText.innerText = currentNum;
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
    if (currentNum.length > 12) {
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

// function to determine a percentage from a value
function percent(x){
    currentNum = '';
    returnNum = x / 100.0;
    screenText.innerText = returnNum;
    return returnNum;
}

// function for processing +/- and turning numbers into negative or positive
function plusMinus(x) {
    if (currentNum === '') {
        returnNum = returnNum * -1;
        screenText.innerText = returnNum;
    }

    else {
        currentNum = '';
        returnNum = x * -1;
        screenText.innerText = returnNum;
    }

    return returnNum; 
}

// operate function requiring 3 saved values from previous logic

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