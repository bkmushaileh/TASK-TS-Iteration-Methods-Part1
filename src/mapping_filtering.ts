/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// `filteredAndSquared` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return an array containing the squares of all numbers that are 20 or greater.
// example:
// filteredAndSquared(numbers); // => [400, 625, 1444, 1225, 1600]
function filteredAndSquared(numbers: number[]): number[] {
  // write your code here...
  const newFilteredAndSquared = numbers
    .filter((number) => number >= 20)
    .map((number) => number * number);

  return newFilteredAndSquared; // replace empty array with what you see is fit
}

// `filteredAndTripled` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return an array of numbers, where each number is tripled if it is divisible by 5.
// example:
// filteredAndTripled(numbers); // => [30, 60, 75, 105, 120]
function filteredAndTripled(numbers: number[]): number[] {
  // write your code here...
  const newFilteredAndTripled = numbers
    .filter((number) => number % 5 == 0)
    .map((number) => number * 3);

  return newFilteredAndTripled; // replace empty array with what you see is fit
}

console.log(filteredAndSquared);
console.log(filteredAndTripled);
export { filteredAndSquared, filteredAndTripled };
