let array = [0, 1, 0, 1, 1];

const solution = (array) => {
  let suffixArray = [0];
  let sum;

  for (let i = 1; i <= array.length; i++) {
    sum = suffixArray[suffixArray.length - 1] + array[array.length - i];
    suffixArray.push(sum);
  }

  suffixArray.reverse();

  sum = 0;

  array.forEach((item, index) => {
    if (item === 0) {
      sum += suffixArray[index];
    }
  })

  if (sum > 1000000000) return -1;

  return sum;

}

console.log(solution(array));