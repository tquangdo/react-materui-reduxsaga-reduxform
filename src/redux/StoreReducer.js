import { createStore, compose, applyMiddleware } from 'redux'
import myReducer from './reducers/Reducer'
import thunk from 'redux-thunk'

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    }) : compose

const cauhinhStore = () => {
    const mWares = [thunk]
    const enhancers = [applyMiddleware(...mWares)]
    const store = createStore(myReducer, composeEnhancers(...enhancers))
    return store
}
// storeReducer.subscribe(() => {
//     console.log(storeReducer.getState())
// })
// npm install gh-pages --save-dev
export default cauhinhStore