// Time to test your basic knowledge in functions! Return the odds from a list:
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []
function odds(values) {
  let oddNums = values.filter((value) => value % 2 !== 0);
  return oddNums;
}
console.log(odds([2, 4, 6]));
