function isSorted(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      // If we find an upward trend, it can't be descending
      descending = false;
    }
    if (arr[i] > arr[i + 1]) {
      // If we find a downward trend, it can't be ascending
      ascending = false;
    }
  }

  if (ascending) return "Ascending";
  if (descending) return "Descending";
  return "Not sorted";
}
// Test
console.log(isSorted([1, 2, 3, 4, 5]))
console.log(isSorted([10, 8, 6, 4, 2]))
console.log(isSorted([1, 3, 2, 4, 5]))
console.log(isSorted([3.14, 2.71, 1.61, 0.57]))
console.log(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]))
console.log(isSorted([0.4, 0.5, 0.3]))