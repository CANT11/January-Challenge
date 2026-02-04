function resolutionStreak(days) {
let streak = 0;

  for (let i = 0; i < days.length; i++) {
    const [steps, screenTime, pages] = days[i];

    // Check resolution criteria
    const success = steps >= 10000 && screenTime <= 120 && pages >= 5;

    if (success) {
      streak++;
    } else {
      // Day number is index + 1
      return `Resolution failed on day ${i + 1}: ${streak} day streak.`;
    }
  }

  return `Resolution on track: ${streak} day streak.`;
}
// TEST CASES 

// Case 1: All successful (3 days)
console.log(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]));

// Case 2: Failed on Day 2 (1 day streak)
console.log(resolutionStreak([[10000, 120, 5], [10950, 121, 11]]));

// Case 3: Failed on Day 3 (2 day streak)
console.log(resolutionStreak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]]));

// Case 4: Failed on Day 4 (3 day streak)
console.log(resolutionStreak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]]));

// Case 5: All successful (10 days)
console.log(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]]));

