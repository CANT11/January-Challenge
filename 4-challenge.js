function isLeapYear(year) {
  // Rule 1 & 2: Check divisibility by 400 or (4 and not 100)
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

//  Console Log Output for your test cases 
console.log("2024:", isLeapYear(2024)); // true
console.log("2023:", isLeapYear(2023)); // false
console.log("2100:", isLeapYear(2100)); // false
console.log("2000:", isLeapYear(2000)); // true
console.log("1999:", isLeapYear(1999)); // false
console.log("2040:", isLeapYear(2040)); // true
console.log("2026:", isLeapYear(2026)); // false