const initState = {

}

const reducerKeys = {
  updateDownloadState: 'updateDownloadState'
}
export default function home (state = initState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case reducerKeys.updateDownloadState:return { ...state, ...payload }
  }
  return state
}
