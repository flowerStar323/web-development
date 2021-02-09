function isEven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    if (n < 0) return null;
    return isEven(n - 2);
  }
  
  console.log(isEven(50));