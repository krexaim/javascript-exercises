const removeFromArray = function(array, item) {
    let args = [];
    let newArray = [];

    //create array of arguments (1, length)
    for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
        };

    //if array not in args, add that element to newArray
    for (let i = 0; i < array.length; i++) {
        if (!array.includes(args[i])) {
            newArray.push(args[i])
        }
    }
    return newArray;
}

removeFromArray([1,2,3,4], 3)


// Do not edit below this line
module.exports = removeFromArray;
