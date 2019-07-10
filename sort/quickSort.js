// Picking and placing pivot
const pivot = (arr, start = 0, end = arr.length - 1) => {
  // swaping indexes
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    // if pivot is less than current, swap with swapIndex
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }

  // Swap the pivot after all less values have been swapped
  swap(arr, start, swapIndex)

  // return index where pivot is positioned
  return swapIndex
}


const quickSort = (arr, left = 0, right = arr.length -1) => {
    // check if array is more than 1 item
    if(left < right) {
        // get pivot index
        let pivotIndex = pivot(arr, left, right)

        // recursively sort left of pivot
        quickSort(arr, left, pivotIndex - 1)
        // recursively sort right of pivot
        quickSort(arr, pivotIndex + 1, right)
      }

     return arr
} 

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))
