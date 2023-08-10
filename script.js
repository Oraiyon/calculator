// MUST TURN BUTTON INPUTS INTO ARRAYS PER EQUATION
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

