function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 0;
    }
    else {
        return a / b;
    }
}

function convertToPercent(a) {
    return a / 100;
}

function identity(previous, current) {
    return current;
}