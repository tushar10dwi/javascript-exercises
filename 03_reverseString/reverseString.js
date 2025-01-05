const reverseString = function(string) {
    const stringCharList = [];
    for (const char of string) {
        stringCharList.push(char);
    }
    reversedList = stringCharList.reverse();
    reverserdWord = stringCharList.join('');
    return reverserdWord;
};

// Do not edit below this line
module.exports = reverseString;
