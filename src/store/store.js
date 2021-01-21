import { createStore, combineReducers, applyMiddleware } from 'redux'
import { appState } from './appState'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
   app: appState,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store
