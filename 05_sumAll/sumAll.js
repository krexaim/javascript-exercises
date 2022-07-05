const sumAll = function(a,b) {
    //error cases
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    let sum = 0;
    
    // buffer to switch in case first number is higher
    if (a > b) {
        let high = a;
        let low = b;
        b = high;
        a = low;
    };

    for (let i = a; i < b - a + 2; i++) {
        sum += i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
