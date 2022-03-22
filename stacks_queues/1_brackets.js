// stack = linked list // queue = double linked list

const checkBrackets = (s) => {
  let stack = [];

  for (const c of s) {
    if (c === "{" || c === "[" || c === "(") {
      stack.push(c);
    } else if (c === "}") {
      if (stack.length === 0 || stack.pop() !== "{") return 0;
    } else if (c === "]") {
      if (stack.length === 0 || stack.pop() !== "[") return 0;
    } else if (c === ")") {
      if (stack.length === 0 || stack.pop() !== "(") return 0;
    }
  }

  return stack.length ? 0 : 1;
}

console.log(checkBrackets("(){}[][]{}"))

console.log(checkBrackets("([{}])"))

console.log(checkBrackets("([)]"))