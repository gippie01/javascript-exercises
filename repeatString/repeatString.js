const repeatString = function(text, x) {
    let a = "";
    for (let i = 0; i < x; i++) {
        a += text;
    }
    return a;
}

module.exports = repeatString
