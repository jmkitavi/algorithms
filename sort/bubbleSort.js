// check 2, move larger.. repeat thru.
// if larger swap
// Best case: O(n)  Worst case: O(n^2)
const bubbleSort = (arr) => {
  let noSwap
  for (let i = 0; i < arr.length; i++) {
    noSwap = true
    for (let j = 0; j < arr.length; j++) {
      // if j is larger than next, swap
      if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          noSwap = false
      }
    }
    // if hasn't been swapped means it's sorted
    // optimization
    if (noSwap) break;
  }

  return arr
}

const betterBubbleSort = (arr) => {
  let noSwap
  // begin sort from the back to remove them from next iteration
  for (let i = arr.length; i > 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      // if j is larger than next, swap
      if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          noSwap = false
      }
    }
    // if hasn't been swapped means it's sorted
    // optimization
    if (noSwap) break;
  }

  return arr
}

// console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))
console.log(betterBubbleSort([8, 1, 2, 3, 4, 5, 6]))
