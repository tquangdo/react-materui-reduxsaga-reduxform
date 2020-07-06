import { fork, take, call, put, delay, takeLatest, takeEvery, select } from 'redux-saga/effects'
import * as actTypes from '../redux/constants/ActionTypes'
import { getListAPI, themTaskAPI, suaTaskAPI, xoaTaskAPI } from '../apis/TaskAPI'
import { STATUS_CODE, DELAY_MS, STATUS } from '../constants/CommonConstants'
import { resetListTask, fetchListOK, fetchListNG, themTaskOK, themTaskNG, suaTaskOK, suaTaskNG, xoaTaskOK, xoaTaskNG } from '../redux/actions/TaskAction'
import { showGlobalLoad, hideGlobalLoad } from '../redux/actions/UIAction'
import { anModal } from '../redux/actions/ModalAction'

/**
 * B1:
 * (1.1) TB.js > taskActionCreators.resetListTask() 
 * OR (1.2) hamSagaSearch > resetListTask({ search: kw, })
 */
function* hamSagaFetchList() {
    while (true) { // nếu KO có thì chỉ run take(actTypes.RESET_LIST_TASK) only 1st time!!!
        const action = yield take(actTypes.RESET_LIST_TASK) //B1.1: waiting for actTypes (blocking type)
        // B2: gọi API getListAPI() from '../../apis/TaskAPI'
        const { params } = action.payload
        /**
         * From (1.1) // truyền arg params={}
         * From (1.2) // truyền arg params={ search: kw, }
         */
        const res = yield call(getListAPI, params)
        /**
        * call: giống JS's Promise, đợi xong sẽ trả về response/err
        * call(funcAPIName, arg1,... argn)
         */
        yield put(showGlobalLoad()) //B2.1: hiển thị thanh loading... // put: non-blocking
        const { status: statusCode, data } = res
        if (statusCode === STATUS_CODE.SUCCESS) { //B3: kiểm tra status code
            yield put(fetchListOK(data))
        } else {
            yield put(fetchListNG(data))
        }
        yield delay(DELAY_MS / 3)
        yield put(hideGlobalLoad()) //B4: tắt thanh loading...
    }
}
function* hamSagaSearch({ payload }) {
    yield delay(DELAY_MS)
    const { kw } = payload
    yield put(resetListTask({ search: kw, }))
}
function* hamSagaThemTask({ payload }) {
    const { title, description, type } = payload
    yield put(showGlobalLoad())
    const res = yield call(themTaskAPI, {
        title,
        description,
        type,
        status: STATUS[0].value,
    })
    const { status: statusCode, data } = res
    if (statusCode === STATUS_CODE.CREATED) {
        yield put(themTaskOK(data))
        yield put(anModal())
    } else {
        yield put(themTaskNG(data))
    }
    yield delay(DELAY_MS / 3)
    yield put(hideGlobalLoad())
}
function* hamSagaSuaTask({ payload }) {
    const { title, description, type, status } = payload
    //phải select, KO gán direct: editTask = state.reducerTask.editTask
    const editTask = yield select(state => state.reducerTask.editTask)
    yield put(showGlobalLoad())
    const res = yield call(suaTaskAPI, {
        title,
        description,
        type,
        status,
    }, editTask.id)
    const { status: statusCode, data } = res
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(suaTaskOK(data))
        yield put(anModal())
    } else {
        yield put(suaTaskNG(data))
    }
    yield delay(DELAY_MS / 3)
    yield put(hideGlobalLoad())
}
function* hamSagaXoaTask({ payload }) {
    const { arg_id } = payload
    yield put(showGlobalLoad())
    const res = yield call(xoaTaskAPI, arg_id)
    const { status: statusCode, data } = res
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(xoaTaskOK(arg_id))
        yield put(anModal())
    } else {
        yield put(xoaTaskNG(data))
    }
    yield delay(DELAY_MS / 3)
    yield put(hideGlobalLoad())
}
function* hamRootSaga() {
    yield fork(hamSagaFetchList) //fork: chia 2 nhánh chạy song song async (non-blocking, còn lại hầu hết là blocking)
    /**
     * B5: run next action...
     */
    //hamSagaSearch & hamSagaThemTask có args nhưng KO truyền args khi call hàm
    yield takeLatest(actTypes.SEARCH, hamSagaSearch)
    yield takeEvery(actTypes.THEM_TASK, hamSagaThemTask) //takeEvery thì mỗi lần gõ 1 kí tự KW search sẽ filter ngay (KO phải chỉ the last như takeLatest)
    yield takeEvery(actTypes.SUA_TASK, hamSagaSuaTask)
    yield takeEvery(actTypes.XOA_TASK, hamSagaXoaTask)
}

export default hamRootSaga