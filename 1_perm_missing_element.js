let array = [7, 3, 2, 8, 5, 4, 1]
// let array = [2, 5, 4, 1]

const findMissingNum = (arr) => {
  let newArrLen = arr.length + 2;
  let newArr = new Array(newArrLen);

  for (let i = 0; i < newArrLen; i++) newArr[i] = false;
  newArr[0] = true;

  for (i = 0; i < arr.length; i++) newArr[arr[i]] = true;

  return newArr.indexOf(false)

}

console.log(findMissingNum(array))