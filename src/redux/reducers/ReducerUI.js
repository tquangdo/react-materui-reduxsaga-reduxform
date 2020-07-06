import * as actTypes from '../constants/ActionTypes'

const stateBanDau = {
    showGL: false,
    showSB: true,
}

const reducerUI = (state = stateBanDau, action) => {
    switch (action.type) {
        case actTypes.SHOW_GLOBAL_LOAD:
            return {
                ...state,
                showGL: true,
            }
        case actTypes.HIDE_GLOBAL_LOAD:
            return {
                ...state,
                showGL: false,
            }
        case actTypes.HIEN_SIDE_BAR:
            return {
                ...state,
                showSB: true,
            }
        case actTypes.AN_SIDE_BAR:
            return {
                ...state,
                showSB: false,
            }
        default:
            return { ...state }
    }
}

export default reducerUI