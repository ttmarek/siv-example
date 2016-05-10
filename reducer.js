const initialState = {
  number: 0
}

const reducer = (previousState = initialState, action)  => {
  if (action.type === 'UPDATE_NUMBER') {
    return Object.assign({}, previousState, { number: action.num })
  }
  return previousState
}

module.exports = reducer
