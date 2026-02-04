function findLeftHandedSeats(table) {
  let availableSeats = 0;
  const topRow = table[0];
  const bottomRow = table[1];

  // 1. Check Top Row (Facing Down)
  // Relative left is the NEXT element (index + 1)
  for (let i = 0; i < topRow.length; i++) {
    if (topRow[i] === "U") {
      const neighborToLeft = topRow[i + 1]; // Looking "right" in the array
      if (neighborToLeft !== "R") {
        availableSeats++;
      }
    }
  }

  // 2. Check Bottom Row (Facing Up)
  // Relative left is the PREVIOUS element (index - 1)
  for (let i = 0; i < bottomRow.length; i++) {
    if (bottomRow[i] === "U") {
      const neighborToLeft = bottomRow[i - 1]; // Looking "left" in the array
      if (neighborToLeft !== "R") {
        availableSeats++;
      }
    }
  }

  return availableSeats;
}

// Testing Example

console.log(findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]))
console.log(findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]))
console.log(findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]])) 
console.log(findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]])) 
console.log(findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]])) 