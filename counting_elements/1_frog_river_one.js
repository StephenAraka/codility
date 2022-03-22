const array = [1, 3, 1, 4, 2, 3, 5, 4]

const frogJump = (X, A) => {
  let path = new Array(X);
  let i;
  let counter = X;

  for (i = 0; i < X; i++) path[i] = false;

  for (i = 1; i < A.length; i++) {
    if (!path[A[i]]) {
      path[A[i]] = true;
      counter -= 1;
    }

    if (counter == 0) return i;

  }

  return -1;
}

console.log(frogJump(5, array));
