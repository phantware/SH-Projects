const btnGet = document.querySelector('button')
const result = document.querySelector('h1')

btnGet.addEventListener('click', () => {
  // let total = add(3, 5)
  // result.innerHTML = sum(total)
  result.innerHTML = addAndSum(3, 2)
})

function add(x, y) {
  return x + y
}

function sum(z) {
  return Math.pow(z, 2)
}

function addAndSum(a, b) {
  let total = add(3, 2)
  return sum(total)
}
