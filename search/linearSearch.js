// 
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }

  return -1
}

console.log(linearSearch([3, 6, 4, 9, 7, 4], 9))
