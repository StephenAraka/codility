let array = [1, 2, 3];

const rotate = (a, k) => {
  let newIndex;
  let newArray = new Array(a.length);

  a.forEach((element, index) => {
    newIndex = (index + k) % a.length;
    newArray[newIndex] = element;
  });

  return newArray;
};

console.log(rotate(array, 4));


// Cyclic Rotation technique applications in CSS:
// It is used in - Circular Buffers, Hashing Algorithms etc