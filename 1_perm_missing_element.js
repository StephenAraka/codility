let array = [3, 7, 6, 2, 5, 4, 8, 1]

const findMissingNum = (arr) => {
  let sorted = arr.sort()
  let start = sorted[0]
  let found = false

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] != start) {
      found = start
      break
    }
    start++
  }

  return found
}

console.log(findMissingNum(array))