let array = [7, 3, 2, 8, 5, 4, 1]
// let array = [2, 5, 4, 1]

const findMissingNum = (arr) => {
  let length = arr.length + 1;
  let expectedSum = 0;
  // let currentSum = arr.reduce((partialSum, accumulated) => partialSum + accumulated, 0); // or
  let currentSum = 0;
  arr.forEach(number => currentSum += number);

  expectedSum = length * (length + 1) / 2;

  return expectedSum - currentSum;
}

console.log(findMissingNum(array))