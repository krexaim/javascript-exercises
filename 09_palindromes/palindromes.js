const palindromes = function (str) {
    let alnum = str.replace(/[^0-9A-Z]+/gi,"");
    let clean = alnum.toLowerCase();
    let backwards = "";

    for (let i = clean.length - 1; i >= 0; i--) {
        backwards += clean[i];
    }
    return backwards == clean;
};

// Do not edit below this line
module.exports = palindromes;
