import { combineReducers } from 'redux'
import reducerTask from './ReducerTask'
import reducerUI from './ReducerUI'
import reducerModal from './ReducerModal'
import reducerAuth from './ReducerAuth'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'

const myReducer = history =>
    combineReducers({
        reducerTask, reducerUI,
        reducerModal, reducerAuth,
        form: formReducer, router: connectRouter(history),
    })

export default myReducer
