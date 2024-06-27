const removeFromArray = function(arr, ...arg) {
    const array = arr.flat();
    
    const result = array.filter((element) => !arg.includes(element));
     
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;




