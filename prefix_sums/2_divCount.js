const solution = (a, b, k) => {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (i % k === 0) count++;
  }

  console.log(count);
}

solution(6, 11, 2)
solution(4, 17, 3)