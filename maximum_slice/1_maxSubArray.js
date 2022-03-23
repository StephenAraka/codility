let input = [23171, 21011, 21123, 21366, 21013, 21367];

const maxProfit = (array) => {
  let globalMax = 0;
  let localMax = 0;

  for (let i = 1; i < array.length; i++) {
    let diff = array[i] - array[i - 1];

    localMax = Math.max(diff, localMax + diff);
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}

console.log(maxProfit(input));