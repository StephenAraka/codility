

const maxCounters = (n, a) => {
  let maxArray = new Array(n).fill(0);
  let startline = 0;
  let current_max = 0;

  a.forEach((incrementVal) => {
    let index = incrementVal - 1;

    if (incrementVal > n) {
      startline = current_max;
    } else if (maxArray[index] < startline) {
      maxArray[index] = startline + 1;
    } else {
      maxArray[index] += 1;
    }

    if (incrementVal <= n && maxArray[index] > current_max) current_max = maxArray[index];
  });

  for (let i = 0; i < n; i++) {
    if (maxArray[i] < startline) maxArray[i] = startline;
  }

  return maxArray;
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4]))