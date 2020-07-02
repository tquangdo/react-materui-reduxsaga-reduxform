import { combineReducers } from 'redux'
import reducerTask from './ReducerTask'
import reducerUI from './ReducerUI'
import reducerModal from './ReducerModal'
import { reducer as formReducer } from 'redux-form'

var myReducer = combineReducers({
    reducerTask, reducerUI, reducerModal,
    form: formReducer
})

export default myReducer
