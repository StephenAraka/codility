let input = [23171, 21011, 21123, 21366, 21013, 21367];

const maxProfit = (input) => {
  let array = [];

  for (let i = 0; i < input.length - 1; i++) {
    array.push(input[i + 1] - input[i]);
  }

  let globalMax = array[0];
  let localMax = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < localMax + array[i]) {
      localMax = localMax + array[i];
    } else {
      localMax = array[i];
    }

    if (localMax > globalMax) globalMax = localMax;
  }

  console.log(array);
  console.log(globalMax, localMax);
}

maxProfit(input);