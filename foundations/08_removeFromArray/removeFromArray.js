const removeFromArray = function(array, ...args) {

    let newArray = array.filter((num) => !args.includes(num));
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
