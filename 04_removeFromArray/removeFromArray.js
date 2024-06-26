const removeFromArray = function(array, arg) {
    const flatArray = array.flat();
    
    const newArray = flatArray.filter((flatArray) => flatArray !== arg);
     
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


