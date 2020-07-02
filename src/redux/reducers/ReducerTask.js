import * as actTypes from '../constants/ActionTypes'
import { hienMsgError } from '../../utils/ToastHelper'

const stateBanDau = {
    dsTask: []
}

const reducerTask = (state = stateBanDau, action) => {
    switch (action.type) {
        case actTypes.RESET_LIST_TASK:
            return {
                // ...state,
                dsTask: [],
            }
        case actTypes.SEARCH_OK:
        case actTypes.FECTH_LIST_OK:
            return {
                // ...state,
                dsTask: action.payload.data,
            }
        case actTypes.THEM_TASK_OK:
            return {
                // ...state,
                dsTask: [action.payload.data].concat(state.dsTask), // newest sẽ hiện vị trí 1st
            }
        case actTypes.THEM_TASK_NG:
        case actTypes.FETCH_LIST_NG:
            hienMsgError(action.payload.err)
            return {
                ...state,
            }
        case actTypes.THEM_TASK:
        default:
            return { ...state, }
    }
}

export default reducerTask