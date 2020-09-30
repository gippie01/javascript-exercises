// Accept custom arrays of indefinite size
const removeFromArray = function(...customArray, ...removeValues) {
    // Step through the customArray
    for (let i = 0; i < customArray.length; i++) {
        if (customArray[i] === removeValues[i]) {
            customArray -= customArray[i];
        }
    }
    return customArray;
}

module.exports = removeFromArray
