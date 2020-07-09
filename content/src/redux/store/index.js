import { combineReducers, createStore } from 'redux'
import home from '../reducer/home'
import download from '../reducer/download'
const reducers = {
  home,
  download
}

export default createStore(combineReducers(reducers))
