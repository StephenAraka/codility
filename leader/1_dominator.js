let array = [2, 5, 4, 2, 4, 3, 4, 4, 1, 4, 4];

const getLeader = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      array.splice(i, 2);
    }
    if (array.length === 1) break;
  }

  return array[0];
}

console.log(getLeader(array))
