const palindromes = function (string) {

    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
                                .toLowerCase()
                                .split('')
                                .filter(char => valid.includes(char))
                                .join('')
    
    const reversed = cleanedString
                                .split('')
                                .reverse()
                                .join('')
    
    return cleanedString === reversed;
};


palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
