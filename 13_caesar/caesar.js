const caesar = function(text, shift) {
    let cipher = "";
    let unicode = "";
    let final = "";
    for (let i = 0; i < text.length; i++) {
        unicode = text.charCodeAt(i);
        cipher = unicode + shift;
        final += String.fromCharCode(cipher)
    }
    return final;
};

// Do not edit below this line
module.exports = caesar;
