// Merging 2 sorted arrays
const merge = (arr1, arr2) => {
  console.log('merge arr1, arr2', arr1, arr2)

  let results = []
  let i = 0
  let j = 0

  // looping through both arrays
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      // if i smaller, push to result, increment i
      results.push(arr1[i])
      i++
    } else {
      // if j smaller, push to result, increment j
      results.push(arr2[j])
      j++
    }
  }

  // if arr1 is longer, push the rest
  while(i < arr1.length) {
      results.push(arr1[i])
      i++
  }

  // if arr2 is longer, push the rest
  while(j < arr2.length) {
      results.push(arr2[j])
      j++
  }

  return results
}

// 
const mergeSort = (arr) => {
  // when array has 0, 1 items it's sorted
  if(arr.length <= 1) {
    return arr
  }
  // get center of array
  let mid = Math.floor(arr.length/2)

  // recursively split array and merge
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

console.log(mergeSort([10, 24, 76, 73]))
