const removeFromArray = function(array, ...args) {
    console.log(args);
    filteredArray = array.filter(function (value) {
        return !(args.includes(value));
    });
    console.log(filteredArray);
    return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
