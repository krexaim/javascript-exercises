const caesar = function(text, shift) {
    let cipher = "";
    let code = "";
    let final = "";
    for (let i = 0; i < text.length; i++) {
        unicode = text.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
                final += text[i]
        } else {
            cipher = unicode + shift;
            final += String.fromCharCode(cipher)
        }
    return final;
    }
};

// Do not edit below this line
module.exports = caesar;