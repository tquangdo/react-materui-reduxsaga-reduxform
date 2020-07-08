import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import { dangnhapAPI, dangkiAPI } from '../apis/TokenAPI'
import {
    REDIRECT_AFTER_DANGNHAP_ADMIN, STATUS_CODE,
    TOKEN, REDIRECT_AFTER_DANGNHAP_USER, REDIRECT_AFTER_DANGKI
} from '../constants/CommonConstants'
import { dangnhapNG, dangnhapOK, dangkiOK, dangkiNG } from '../redux/actions/AuthAction'
import { hideGlobalLoad, showGlobalLoad } from '../redux/actions/UIAction'
import * as actTypes from '../redux/constants/ActionTypes'

function* hamSagaDangnhap({ payload }) {
    const { email, pw } = payload
    const timestamp = (new Date()).toISOString()
    // dangnhapAPI() là hàm giả lập cho async call API INS INTO tokens
    const res = yield call(dangnhapAPI, {
        email, pw, timestamp
    })
    yield put(showGlobalLoad())
    const { status: statusCode, data } = res
    if (statusCode === STATUS_CODE.CREATED) {
        if (
            email === 'admin@gmail.com' && pw === 'admin'
        ) {
            yield put(dangnhapOK(data, 'admin'))
            localStorage.setItem(TOKEN, timestamp)
            yield put(push(REDIRECT_AFTER_DANGNHAP_ADMIN))
        } else {
            yield put(dangnhapOK(data, 'user'))
            yield put(push(REDIRECT_AFTER_DANGNHAP_USER))
        }
    } else {
        yield put(dangnhapNG(data))
    }
    yield put(hideGlobalLoad())
}
function* hamSagaDangki({ payload }) {
    const { fullname, email, pw } = payload
    const res = yield call(dangkiAPI, {
        fullname, email, pw
    })
    yield put(showGlobalLoad())
    const { status: statusCode, data } = res
    if (statusCode === STATUS_CODE.CREATED) {
        yield put(dangkiOK(data))
        yield put(push(REDIRECT_AFTER_DANGKI))
    } else {
        yield put(dangkiNG(data))
    }
    yield put(hideGlobalLoad())
}
function* hamAuthSaga() {
    yield takeLatest(actTypes.DANGNHAP, hamSagaDangnhap)
    yield takeLatest(actTypes.DANGKI, hamSagaDangki)
}

export default hamAuthSaga