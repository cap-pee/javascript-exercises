const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 >= 0 && num2 >= 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
            sum += i;
        }
    } else {
        return 'ERROR'
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
