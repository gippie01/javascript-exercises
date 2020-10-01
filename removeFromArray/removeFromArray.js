/* 
Accept multiple arguments as a single array
(the array argument & the values to be removed)
*/
const removeFromArray = function(...arguments) {
    // Get the inputted array to be manipulated from the 0th index of arg
    const inputArray = arguments[0];
    // New array to push the inputArray elements that aren't repeated in the arguments array
    const newArray = [];

    // Step through each element of inputArray
    inputArray.forEach((element) => {
        // Check if the current element in inputArray is repeated in the original arguments array
        if (!arguments.includes(element)) {
            // If it's not part of the arguments array, push to newArray
            newArray.push(element);
        }
    })
    // Return the newArray
    return newArray;
}

module.exports = removeFromArray
