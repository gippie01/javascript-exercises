const repeatString = function(text, x) {
    let a = "";
    for (let i = 0; i < x; i++) {
        a += text; // repeat the text without any space
    }
    return a;
}

module.exports = repeatString
