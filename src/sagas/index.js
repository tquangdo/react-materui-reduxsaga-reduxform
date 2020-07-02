import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import * as actTypes from '../redux/constants/ActionTypes'
import { getList, themTask } from '../apis/TaskAPI'
import { STATUS_CODE, DELAY_MS, STATUS } from '../constants/CommonConstants'
import { fetchListOK, fetchListNG, searchTaskOK, themTaskOK, themTaskNG } from '../redux/actions/TaskAction'
import { showGlobalLoad, hideGlobalLoad } from '../redux/actions/UIAction'
import { anModal } from '../redux/actions/ModalAction'

/**
 * B1: TB.js > taskActionCreators.resetListTask()
 */
function* hamSagaFetchList() {
    while (true) { // nếu KO có thì chỉ run take(actTypes.RESET_LIST_TASK) only 1st time!!!
        yield take(actTypes.RESET_LIST_TASK) //B1.1: waiting for actTypes (blocking type)
        // B2: gọi API getList() from '../../apis/TaskAPI'
        const res = yield call(getList) //call: giống JS's Promise, đợi xong sẽ trả về response/err
        yield put(showGlobalLoad()) //B2.1: hiển thị thanh loading... // put: non-blocking
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) { //B3: kiểm tra status code
            yield put(fetchListOK(data))
        } else {
            yield put(fetchListNG(data))
        }
        yield delay(DELAY_MS)
        yield put(hideGlobalLoad()) //B4: tắt thanh loading...
    }
}
function* hamSagaSearch({ payload }) {
    yield delay(DELAY_MS)
    const { kw } = payload
    const dsTask = yield select(state => state.reducerTask.dsTask) // phải cần select, KO được gán direct: dsTask=state.reducerTask.dsTask
    const dsTaskDaLoc = dsTask.filter(dsTask => dsTask.title
        .trim().toLowerCase()
        .includes(kw.trim().toLowerCase())
    )
    yield put(searchTaskOK(dsTaskDaLoc))
}
function* hamThemTask({ payload }) {
    const { title, description, type } = payload
    yield put(showGlobalLoad())
    const res = yield call(themTask, {
        title,
        description,
        type,
        status: STATUS[0].value,
    })
    const { status, data } = res
    if (status === STATUS_CODE.CREATED) {
        yield put(themTaskOK(data))
        yield put(anModal())
    } else {
        yield put(themTaskNG(data))
    }
    yield delay(DELAY_MS)
    yield put(hideGlobalLoad())
}
function* hamRootSaga() {
    yield fork(hamSagaFetchList) //fork: chia 2 nhánh chạy song song async (non-blocking, còn lại hầu hết là blocking)
    /**
     * B5: run next action...
     */
    yield takeLatest(actTypes.SEARCH, hamSagaSearch) //takeEvery thì mỗi lần gõ 1 kí tự KW search sẽ filter ngay (KO phải chỉ the last như takeLatest)
    yield takeEvery(actTypes.THEM_TASK, hamThemTask)
}

export default hamRootSaga