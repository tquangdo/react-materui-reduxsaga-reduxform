import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import hamRootSaga from '../sagas/RootSaga'
import myReducer from './reducers/Reducer'

const sagaMW = createSagaMiddleware()
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    }) : compose

export const history = createBrowserHistory()

const cauhinhStore = () => {
    const mWares = [thunk, sagaMW, routerMiddleware(history)]
    const enhancers = [applyMiddleware(...mWares)]
    const store = createStore(
        myReducer(history),
        composeEnhancers(...enhancers)
    )
    sagaMW.run(hamRootSaga)
    return store
}

export default cauhinhStore