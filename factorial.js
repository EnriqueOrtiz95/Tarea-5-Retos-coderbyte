function FirstFactorial(num) {
    var total = 1;
    while (num >= 1) {
      total *= num;
      num--;
    }
    return total; 
  }
  console.log(FirstFactorial(7));