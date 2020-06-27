import * as actTypes from '../constants/ActionTypes'
import { hienMsgError } from '../../utils/ToastHelper'

const stateBanDau = {
    dsTask: []
}

const reducerTask = (state = stateBanDau, action) => {
    switch (action.type) {
        case actTypes.RESET_LIST_TASK:
            return {
                ...state,
                dsTask: [],
            }
        case actTypes.FECTH_LIST_OK:
            return {
                ...state,
                dsTask: action.payload.data,
            }
        case actTypes.FETCH_LIST_NG:
            hienMsgError(action.payload.err)
            return {
                ...state,
                dsTask: [],
            }
        default:
            return state
    }
}

export default reducerTask