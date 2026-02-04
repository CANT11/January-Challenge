function isCircularPrime(n) {
  // 1. Helper function to check if a single number is prime
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 2. Convert number to string to handle rotations
  let str = n.toString();
  let rotations = str.length;

  for (let i = 0; i < rotations; i++) {
    // Check if the current rotation is prime
    if (!isPrime(parseInt(str))) {
      return false;
    }
    // Rotate the string: move first digit to the end
    // "197" -> "971" -> "719"
    str = str.slice(1) + str[0];
  }

  return true;
}

// Test Cases
console.log(isCircularPrime(197));  
console.log(isCircularPrime(23));   
console.log(isCircularPrime(13));   
console.log(isCircularPrime(89));
console.log(isCircularPrime(1193)); 