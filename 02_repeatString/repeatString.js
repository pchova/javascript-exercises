const repeatString = function(string, num) {
    var str = '';

    if(num < 0) {
        return 'ERROR';
    }
    
    for (x=1; x<=num; x++) {
        str += string;
    }

    return str;
};

// Do not edit below this line
module.exports = repeatString;

