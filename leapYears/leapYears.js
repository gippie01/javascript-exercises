const leapYears = function(year) {

    // Checks conditionals from top-down order

    // Years divisible by BOTH 4 and 400 are leap years
    if (year % 4 === 0 && year % 400 === 0) {
        return true;
    }
    // Years divisible by 100 are not leap years even if it's divisible 4 (excluding every 400 years)
    else if (year % 4 === 0 && year % 100 === 0) {
        return false;
    }
    // Years divisible by 4 are leap years 
    else if (year % 4 === 0) {
        return true;
    }
    // Any other years are not leap years.
    else {
        return false;
    }
}
module.exports = leapYears
