const solution = (sizes, direction) => {
  let stack = [];
  let popped;
  let survivors = 0;

  for (let i = 0; i < direction.length; i++) {
    let currentWeight = sizes[i];

    if (direction[i] === 1) {
      stack.push(currentWeight);
    } else {
      popped = stack.length === 0 ? -1 : stack.pop();

      while (popped !== -1 && popped < currentWeight) {
        popped = stack.length === 0 ? -1 : stack.pop();
      }

      if (popped === -1)
        survivors++;
      else
        stack.push(popped);
    }
  }

  return survivors + stack.length;
}

console.log(solution(
  [4, 3, 2, 1, 5],
  [0, 1, 0, 0, 0]
));

console.log(solution(
  [2, 6, 4, 3, 1, 5],
  [0, 1, 0, 1, 0, 0]
));
