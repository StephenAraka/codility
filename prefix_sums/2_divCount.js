const solution = (a, b, k) => {
  let start, end;
  start = Math.ceil(a / k);
  end = Math.floor(b / k);

  console.log((end - start) + 1);
}

solution(6, 11, 2)
solution(4, 17, 3)