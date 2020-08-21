const isPrime = (day) => {
  if (day === 1){
    return false;
  } else if(day === 2) {
    return true;
  } else {
    for(var x = 2; x < day; x++) {
      if(day % x === 0) {
        return false;
      }
    }
    return true;  
  }
};

module.exports = {
  isPrime,
};