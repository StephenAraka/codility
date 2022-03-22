let array = [3, 1, 2, 4, 3]

const equilibrium = (arr) => {
  let left = arr[0], right = 0;

  arr.forEach(num => right += num) // or arr.slice(1) instead of splice
  right -= left;

  let diff = Math.abs(left - right);

  for (let i = 1; i < arr.length; i++) {
    left += arr[i];
    right -= arr[i];
    diff = Math.abs(left - right) < diff ? Math.abs(left - right) : diff;
  }

  return diff;
}

console.log(equilibrium(array))