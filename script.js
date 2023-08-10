function getSum(array){
    return array.reduce((sum, num) => sum + num);
}

function getDifference(array){
    return array.reduce((diff, num) => diff - num);
}

function getProduct(array){
    return array.reduce((product, num) => product * num);
}

function getQuotient(array){
    return array.reduce((quotient, num) => quotient / num);
}

let firstNum;
let operation;
let secondNum;

function operate(firstNum, operation, secondNum){
    if (operation == "+"){
        const newArray= [];
        newArray.push(firstNum, secondNum);
        return getSum(newArray);
    } else if (operation == "-"){
        const newArray=[];
        newArray.push(firstNum, secondNum);
        return getDifference(newArray);
    } else if (operation == "*"){
        const newArray=[];
        newArray.push(firstNum, secondNum);
        return getProduct(newArray);
    } else {
        const newArray=[];
        newArray.push(firstNum, secondNum);
        return getQuotient(newArray);
    }
};

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators= ["+", "-", "*", "/"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let displayValue = button.innerText;
        if (displayValue == "Clear"){
            display.innerText= "";
        }
        if (displayValue == "="){
            if (display.innerText.includes("+")){
                let splitDisplay= display.innerText.split("+");
                operate(Number(splitDisplay[0]), "+", Number(splitDisplay[1]));
            }//CONTINUE WITH OTHER OPERATIONS
        }
        display.innerText += displayValue;
    });
});
