import * as actTypes from '../constants/ActionTypes'
import { hienMsgError, hienMsg } from '../../utils/ToastHelper'

const stateBanDau = {
    dsTask: [],
    editTask: null,
}

const reducerTask = (state = stateBanDau, action) => {
    const { payload } = action
    switch (action.type) {
        case actTypes.RESET_LIST_TASK:
            return {
                dsTask: [],
            }
        case actTypes.FECTH_LIST_OK:
            return {
                dsTask: payload.data,
            }
        case actTypes.THEM_TASK_OK:
            hienMsg('Đã thêm task OK.')
            return {
                dsTask: [payload.data].concat(state.dsTask), // newest sẽ hiện vị trí 1st
            }
        case actTypes.SUA_TASK_OK:
            const { dsTask } = state
            const { data } = payload
            const chiso = dsTask.findIndex(item => item.id === data.id)
            let newDs = []
            if (chiso !== -1) {
                newDs = [
                    ...dsTask.slice(0, chiso),
                    data,
                    ...dsTask.slice(chiso + 1),
                ]
            }
            hienMsg('Đã sửa task OK.')
            return {
                dsTask: newDs
            }
        case actTypes.XOA_TASK_OK:
            hienMsg('Đã xóa task OK.')
            return {
                dsTask: state.dsTask.filter(item => item.id !== payload.arg_id)
            }
        case actTypes.XOA_TASK_NG:
        case actTypes.THEM_TASK_NG:
        case actTypes.SUA_TASK_NG:
        case actTypes.FETCH_LIST_NG:
            hienMsgError(payload.err)
            return {
                ...state,
            }
        case actTypes.EDIT_TASK:
            return {
                ...state, // bắt buộc phải có!
                editTask: payload.arg_mock
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducerTask