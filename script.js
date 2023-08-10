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

