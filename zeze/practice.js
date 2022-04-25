let array = ["5", "2", "C", "D", "+"];

const solution = (ops) => {
  let result = 0;
  let scores = [];

  for (let i = 0; i < ops.length; i++) {
    const element = ops[i];

    if (element === "D") {
      scores.push(scores[scores.length - 1] * 2);
    } else if (element === "C") {
      scores.pop();
    } else if (element === "+") {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    } else {
      scores.push(parseInt(ops[i]));
    }
  }


  for (const num of scores) {
    result += num;
  }

  return result;
}

solution(array);