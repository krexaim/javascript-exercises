const removeFromArray = function(array, ...items) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (!newArray.includes(array[i]) && array[i] != items[j]) {
                if (array.includes[items[j]]) {
                    continue;
                }
                newArray.push(array[i])
            }
        }
    };

  
    // array.forEach(function(items) {
    //     for (let i = 0; i < items.length; i++) {
    //         console.log(items[i])
    //         if (!array.includes(items[i])) {
    //             newArray.push(items[i]);
    //             console.log(newArray);
    //         }
    //     }
    // });
    return newArray;
};

removeFromArray([1,2,3,4], 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
