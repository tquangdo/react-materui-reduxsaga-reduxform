import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import { dangnhapAPI } from '../apis/TokenAPI'
import { REDIRECT_AFTER_DANGNHAP, STATUS_CODE, TOKEN } from '../constants/CommonConstants'
import { dangnhapNG, dangnhapOK } from '../redux/actions/AuthAction'
import { hideGlobalLoad, showGlobalLoad } from '../redux/actions/UIAction'
import * as actTypes from '../redux/constants/ActionTypes'

function* hamSagaDangnhap({ payload }) {
    const { email, pw } = payload
    if (
        email === 'admin@gmail.com' && pw === 'admin'
    ) {
        const timestamp = (new Date()).toISOString()
        const res = yield call(dangnhapAPI, {
            email, pw, timestamp
        })
        yield put(showGlobalLoad())
        const { status: statusCode, data } = res
        if (statusCode === STATUS_CODE.CREATED) {
            yield put(dangnhapOK(data))
            localStorage.setItem(TOKEN, timestamp)
            yield put(push(REDIRECT_AFTER_DANGNHAP))
        } else {
            yield put(dangnhapNG(data))
        }
    } else {
        yield put(dangnhapNG(new Error('email hoặc password sai!!!')))
    }
    yield put(hideGlobalLoad())
}
function* hamAuthSaga() {
    yield takeLatest(actTypes.DANGNHAP, hamSagaDangnhap)
}

export default hamAuthSaga