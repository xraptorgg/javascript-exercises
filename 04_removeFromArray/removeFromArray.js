const removeFromArray = function(array, ...arg) {
    const args = arg;
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (args[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
