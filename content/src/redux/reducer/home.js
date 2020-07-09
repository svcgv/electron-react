const initState = {
}

const reducerKeys = {
  state: 'state'
}
export default function home (state = initState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case reducerKeys.state:return { ...state, ...payload }
  }
  return state
}
