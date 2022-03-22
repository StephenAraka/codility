

const maxCounters = (n, a) => {
  let maxArray = new Array(n).fill(0);

  a.forEach((element, index) => {
    if (element <= n) {
      maxArray[element - 1] = maxArray[element - 1] + 1;
    } else {
      maxArray.fill(Math.max(...maxArray));
    }
  });

  return maxArray;
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4]))