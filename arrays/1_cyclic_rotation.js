let array = [1, 2, 3];

const rotate = (a, k) => {
  let times = k % a.length;
  let i, newIndex;
  let newArray = new Array(a.length);

  for (i = 0; i <= times; i++) {
    a.forEach((element, index) => {
      newIndex = (index + times) < 3 ? (index + times) : (index + times) % a.length;
      console.log(newIndex);
      newArray[newIndex] = element;
    });
  }

  return newArray;
};

console.log(rotate(array, 4));