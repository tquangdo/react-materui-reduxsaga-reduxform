import * as actTypes from '../constants/ActionTypes'
import { hienMsgError } from '../../utils/ToastHelper'

const stateBanDau = {
    dsTask: []
}

const reducerTask = (state = stateBanDau, action) => {
    switch (action.type) {
        case actTypes.RESET_LIST_TASK:
            return {
                dsTask: [],
            }
        case actTypes.FECTH_LIST_OK:
            return {
                dsTask: action.payload.data,
            }
        case actTypes.FETCH_LIST_NG:
            hienMsgError(action.payload.err)
            return {
                dsTask: [],
            }
        default:
            return state
    }
}

export default reducerTask