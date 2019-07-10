// Search for a occurence of string in longer
const naiveStringSearch = (long, short) => {
  let count = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // i + j for current long char, avoid looping checking same char of long
      if (short[j] !== long[i + j]) {
        break;
      }
      // increase count if reaches last short digit and doesn't
      if (j === short.length - 1) {
        count ++
      }
    }
  }

  return count
}

console.log(naiveStringSearch("joseph kitavi kitavi", "ki"))
