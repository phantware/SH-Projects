//Click Handler

// let count = 0
// const getBtn = document.getElementById('clickMe')
// getBtn.addEventListener('click', () => {
//   // alert('Hello World')
//   console.log('hello world', count++)
// })

//CallBack Explained

// setTimeout(() => {
//   console.log('Timer')
// }, 5000)

// function x(y) {
//   console.log('x')
//   y()
// }
// x(function y() {
//   console.log('y')
// })

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const empty = []

const result = arr.filter((arr2) => {
  return arr2 % 2 == 0
})
empty.push(result)
console.log('result', result)
console.log('empty', empty)
