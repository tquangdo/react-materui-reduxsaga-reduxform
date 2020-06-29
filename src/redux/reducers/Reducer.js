import { combineReducers } from 'redux'
import reducerTask from './ReducerTask'
import reducerUI from './ReducerUI'

var myReducer = combineReducers({
    reducerTask, reducerUI
})

export default myReducer
