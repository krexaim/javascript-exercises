const removeFromArray = function(array, item) {
    //create array of arguments (1, length)
    let args = [];
    let newArray = [];

    for (let i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
        }
    for (let i = 0; i < args.length; i++) {
        if (!array.includes(args[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}




// Do not edit below this line
module.exports = removeFromArray;
