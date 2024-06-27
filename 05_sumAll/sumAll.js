const sumAll = function(x,y) {

    let total = 0;

    if (x < 0 || y < 0) {
      return 'ERROR';
    } else if (typeof x != 'number' || typeof y != 'number') {
      return 'ERROR';
    } else if (x > y ) {
      let start = y;
      let end = x;
      for (let i = start; i <= end; i++) {
          total += i;
      }
    } else if (x < y) {
      for (let i=x; i <= y; i++){
        total += i; 
      }
    } else {
      return 'ERROR';
    }
    
  return total;
};

// Do not edit below this line
module.exports = sumAll;
