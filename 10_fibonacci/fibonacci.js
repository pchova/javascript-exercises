const fibonacci = function(num) {
    const fibonacci = [];
    let sum;
    let num1 = 0;
    let num2 = 1;

    num = Number(num);

    if (typeof num !== 'number') {
        num = parseInt(num);
    } else if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else if (num < 0) {
        return 'OOPS';
    }

    for (let i = 2; i <= num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        fibonacci.push(sum);
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
