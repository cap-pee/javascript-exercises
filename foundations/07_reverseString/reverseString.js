const reverseString = function(string) {
    let newstring = '';
    for (let i = -1; i >= -string.length; i--) {
        newstring += string.at(i)
    }
    return newstring
};

// Do not edit below this line
module.exports = reverseString;
