const reverseString = function (string) {
    var myString = "";
    
    for(var i=string.length-1; i >= 0; i--){
        myString += string[i]
    }
    return myString;
};

// Do not edit below this line
module.exports = reverseString;

/*  return string.split("").reverse().join(""); 

    splitStr = string.split("");

    reverseStr = splitStr.reverse();

    joinStr = reverseStr.join("");

    return joinStr;
*/