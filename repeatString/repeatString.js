const repeatString = function(text, x) {
    if (x < 0) {
        return "ERROR";
    }
    else {
        let a = "";
        for (let i = 0; i < x; i++) {
            a += text; // repeat the text without any space
        }
        return a;
    }
}

module.exports = repeatString
