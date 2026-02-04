function tireStatus(pressuresPSI, rangeBar) {
  // 1. Convert the range from Bar to PSI
  const minPSI = rangeBar[0] * 14.5038;
  const maxPSI = rangeBar[1] * 14.5038;

  // 2. Map through each tire pressure to check status
  return pressuresPSI.map(psi => {
    if (psi < minPSI) {
      return "Low";
    } else if (psi > maxPSI) {
      return "High";
    } else {
      return "Good";
    }
  });
}

// --- Test Cases for your console ---
console.log(tireStatus([32, 28, 35, 29], [2, 3]))
console.log(tireStatus([32, 28, 35, 30], [2, 2.3]))
console.log(tireStatus([29, 26, 31, 28], [2.1, 2.5]))
console.log(tireStatus([31, 31, 30, 29], [1.5, 2]))
console.log(tireStatus([30, 28, 30, 29], [1.9, 2.1]))