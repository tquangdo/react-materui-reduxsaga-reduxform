import * as actTypes from '../constants/ActionTypes'

const stateBanDau = {
    showGL: false,
}

const reducerUI = (state = stateBanDau, action) => {
    switch (action.type) {
        case actTypes.SHOW_GLOBAL_LOAD:
            return {
                showGL: true,
            }
        case actTypes.HIDE_GLOBAL_LOAD:
            return {
                showGL: false,
            }
        default:
            return state
    }
}

export default reducerUI