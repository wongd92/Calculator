// function for add
function addition(x,y) {
    return x+y;
}

// function for subtract
function subtract(x,y) {
    return x-y;
}
// function for multiply
function multiply(x,y) {
    return x*y;
}

// function for divide
function divide(x,y){
    return x/y;
}

// operate function

function operate(operator, num1, num2) {
    if (operator === "+") {
        addition(num1, num2);
    }

    else if(operator === "-"){
        subtraction(num1, num2);
    }

    else if(operator === "*"){
        multiply(num1, num2);
    }

    else {
        divide(num1, num2);
    }
}

// display

let displayValue = 0; 
let tempNum = '';
let currentNum = '';

document.querySelectorAll('.btn-2').forEach(buttonValue => {
    buttonValue.addEventListener('click', () =>{
        populateDisplay(buttonValue.textContent);
    })
});

function populateDisplay(number) {
    tempNum = number;
    currentNum += tempNum;
    
    let text = document.querySelector('.screen');
    text.innerText = currentNum;
}


console.log(addition(1,3));
console.log(subtract(10,4));
console.log(multiply(5,2));
console.log(divide(4,1));
console.log(currentNum + tempNum);