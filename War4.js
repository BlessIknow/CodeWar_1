// // our task is to sum the differences between consecutive pairs in the array in descending order.
// Example // [2, 1, 10]  -->  9
// In descending order: [10, 2, 1] // Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ). -->  []

function sumOfDifferences(arr) {
  let newArr = arr.sort((a, b) => b - a);
  newArr = newArr.map((a,i) => a - newArr[i + 1] || 0);
  let sum = newArr.reduce((c, acc) => c + acc, 0);
  return sum;
}
console.log(sumOfDifferences([2, 1, 10]));

