const state = {
  result: 0,
  history: [],
  currentOperation: {
    '1stOperands': '',
    '2ndOperands': '',
    operator: '',
  },
}

const renderResult = () => {
  document.querySelector('.screen-result').innerHTML = state.result
}

const renderHistory = () => {
  document.querySelector('.screen-history').innerHTML = state.history
    .map((historyItem) => `<div class="screen-operation">${historyItem}</div>`)
    .join('')
}
const render1stCurrentOperationOperand = () => {
  document.querySelector('.screen-current-operation-operands-1st').innerHTML =
    state.currentOperation['1stOperands'] // get from state
}
const render2ndCurrentOperationOperand = () => {
  document.querySelector('.screen-current-operation-operands-2nd').innerHTML =
    state.currentOperation['2ndOperands']
}
const renderCurrentOperationOperator = () => {
  document.querySelector('.screen-current-operation-operator').innerHTML =
    state.currentOperation.operator // get from state
}

renderResult()

document.querySelectorAll('.operands').forEach((operand_button) => {
  operand_button.addEventListener('click', () => {
    if (state.currentOperation.operator !== '') {
      state.currentOperation['2ndOperands'] += operand_button.textContent // set to state
      render2ndCurrentOperationOperand()
    } else {
      state.currentOperation['1stOperands'] += operand_button.textContent // set to state
      render1stCurrentOperationOperand()
    }

    console.log(state.currentOperation.operator)
  })
})

document.querySelectorAll('.operator').forEach((operator_button) => {
  operator_button.addEventListener('click', () => {
    state.currentOperation.operator = operator_button.textContent // set to state
    renderCurrentOperationOperator()
  })
})

document.querySelector('.equals').addEventListener('click', () => {
  if (state.currentOperation.operator == '+') {
    state.result =
      Number(state.currentOperation['1stOperands']) +
      Number(state.currentOperation['2ndOperands']) // set to state

    const operation = `${state.currentOperation['1stOperands']} ${state.currentOperation.operator} ${state.currentOperation['2ndOperands']} = ${state.result}`
    state.history.push(operation) // set to state
  } else if (state.currentOperation.operator == '-') {
    state.result =
      Number(state.currentOperation['1stOperands']) -
      Number(state.currentOperation['2ndOperands']) // set to state

    const operation = `${state.currentOperation['1stOperands']} ${state.currentOperation.operator} ${state.currentOperation['2ndOperands']} = ${state.result}`
    state.history.push(operation) // set to state
  } else if (state.currentOperation.operator == '*') {
    state.result =
      Number(state.currentOperation['1stOperands']) *
      Number(state.currentOperation['2ndOperands']) // set to state

    const operation = `${state.currentOperation['1stOperands']} ${state.currentOperation.operator} ${state.currentOperation['2ndOperands']} = ${state.result}`
    state.history.push(operation) // set to state
  } else {
    state.result =
      Number(state.currentOperation['1stOperands']) /
      Number(state.currentOperation['2ndOperands']) // set to state

    const operation = `${state.currentOperation['1stOperands']} ${state.currentOperation.operator} ${state.currentOperation['2ndOperands']} = ${state.result}`
    state.history.push(operation) // set to state
  }

  renderResult()
  renderHistory()
})

document.querySelector('.ac').addEventListener('click', () => {
  state.result = 0
  renderResult()

  state.currentOperation = {
    '1stOperands': '',
    '2ndOperands': '',
    operator: '',
  }
  render1stCurrentOperationOperand()
  render2ndCurrentOperationOperand()
  renderCurrentOperationOperator()
})
