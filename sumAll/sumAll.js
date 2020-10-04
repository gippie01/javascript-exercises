const sumAll = function(num1, num2) {
    // Initialize a variable to hold the sum of all numbers
    let total = 0;

    // Validation for non-number and negative number parameters
    if ((typeof num1 !== "number") || (typeof num2 !== "number") || (num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }
    // Loop if num1 is smaller than num2
    else if (num1 < num2) {
        for (let i = num1; num1 <= num2; num1++) {
            total += num1;
        }
        return total;
    }
    // Loop if num1 is larger than num2
    else {
        for (let i = num1 ; num1 >= num2; num1--) {
            total += num1;
        }
        return total;
    }
}

module.exports = sumAll
