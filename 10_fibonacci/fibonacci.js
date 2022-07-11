const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    
    let fibo = [1, 1];

    for (let i = 2; i < num; i++) {
        let next = fibo[i-1] + fibo[i-2];
        fibo.push(next);
    }
    return fibo[fibo.length - 1];

};

// Do not edit below this line
module.exports = fibonacci;
