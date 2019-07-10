// Sorted Array
// Split at half, check value. Go to half with value split that... repeat
// O(log n)       16 4 2  2^3
const binarySearch = (arr, val) => {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== val && start <= end) {
    if (arr[middle] > val) {
      end = middle - 1
    }
    else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }

  if (arr[middle] === val) {
    return middle
  }

  return -1
}

console.log(binarySearch([1, 3, 4, 6, 7, 8, 9, 11, 15, 16, 18, 19], 9))
