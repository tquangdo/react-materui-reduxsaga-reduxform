import * as actTypes from '../constants/ActionTypes'
import { hienMsg, hienMsgError } from '../../utils/ToastHelper'

const reducerAuth = (state = {}, action) => {
    switch (action.type) {
        case actTypes.DANGKI_OK:
            hienMsg('Đăng ký thành công')
            return {
                ...state,
            }
        case actTypes.DANGKI_NG:
        case actTypes.DANGNHAP_NG:
            hienMsgError(action.payload.err)
            return {
                ...state,
            }
        case actTypes.DANGNHAP_OK:
            hienMsg('Đăng nhập ' + action.msg + ' thành công')
            return {
                ...state,
            }
        default:
            return { ...state }
    }
}

export default reducerAuth