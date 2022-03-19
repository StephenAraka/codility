let array = [7, 3, 2, 8, 5, 4, 1]
// let array = [2, 5, 4, 1]

const findMissingNum = (arr) => {
  let length = arr.length + 1;
  let sum = 0;
  let current = arr.reduce((partialSum, accumulated) => partialSum + accumulated, 0);

  for (let i = 1; i <= length; i++) {
    sum += i
  }

  return sum - current;
}

console.log(findMissingNum(array))