import { createStore, compose, applyMiddleware } from 'redux'
import myReducer from './reducers/Reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import hamRootSaga from '../sagas'

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    }) : compose

const sagaMW = createSagaMiddleware()
const cauhinhStore = () => {
    const mWares = [thunk, sagaMW]
    const enhancers = [applyMiddleware(...mWares)]
    const store = createStore(myReducer, composeEnhancers(...enhancers))
    sagaMW.run(hamRootSaga)
    return store
}
// storeReducer.subscribe(() => {
//     console.log(storeReducer.getState())
// })
// npm install gh-pages --save-dev
export default cauhinhStore