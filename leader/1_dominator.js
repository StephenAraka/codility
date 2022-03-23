let array = [2, 4, 2, 4, 3, 4];

const getLeader = (array) => {
  let candidate;
  let consecutive = 0;

  array.forEach(item => {
    if (consecutive === 0) {
      candidate = item;
      consecutive += 1;
    } else if (candidate === item) {
      consecutive += 1;
    } else {
      consecutive -= 1;
    }
  })

  let occurence = 0;
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === candidate) {
      occurence++;
      index = i;
    }
  }

  return occurence > array.length / 2 ? index : -1;
}

console.log(getLeader(array))
