//Click Handler

let count = 0
const getBtn = document.getElementById('clickMe')
getBtn.addEventListener('click', () => {
  // alert('Hello World')
  console.log('hello world', count++)
})

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
