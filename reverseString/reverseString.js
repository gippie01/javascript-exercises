const reverseString = function(word) {
    // Variable to store the reversed word
    let reversedWord = "";
    // Convert any input to a string to permit numbers/symbols
    word = word.toString();
    // Work down from last index of the input until the 0th index
    for (let i = (word.length - 1); i >= 0; i--) {
        // add the character stored in each index to the reversedWord
        reversedWord += word[i];
    }
    // Return the reversed word
    return reversedWord
}

module.exports = reverseString
