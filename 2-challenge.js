function nthFibonacci(n) {
  // 1. Handle base cases for the 1st and 2nd numbers
  if (n === 1) return 0n;
  if (n === 2) return 1n;
  
  let a = 0n; // F(1)
  let b = 1n; // F(2)
  
  // 2. Adjust the loop: to make F(4) = 2, we iterate up to n-1
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  
  return b;
}

// Verification:
console.log(nthFibonacci(4).toString());  // "2"
console.log(nthFibonacci(10).toString()); // "34"
console.log(nthFibonacci(15).toString()); // "377"
console.log(nthFibonacci(40).toString()); // "63245986"
console.log(nthFibonacci(75).toString()); // "1304969544928657"