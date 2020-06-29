import { fork, take, call, put, delay } from 'redux-saga/effects'
import * as actTypes from '../redux/constants/ActionTypes'
import { getList } from '../apis/TaskAPI'
import { STATUS_CODE } from '../constants/CommonConstants'
import { fetchListOK, fetchListNG } from '../redux/actions/TaskAction'
import { showGlobalLoad, hideGlobalLoad } from '../redux/actions/UIAction'

/**
 * B1: TB.js > actionTask.resetListTask()
 */
function* ham1() {
    while (true) { // nếu KO có thì chỉ run take(actTypes.RESET_LIST_TASK) only 1st time!!!
        yield take(actTypes.RESET_LIST_TASK) //B1.1: waiting for actTypes (blocking type)
        // B2: gọi API getList() from '../../apis/TaskAPI'
        const res = yield call(getList) //call: giống JS's Promise, đợi xong sẽ trả về response/err
        yield put(showGlobalLoad()) //B2.1: hiển thị thanh loading...
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) { //B3: kiểm tra status code
            yield put(fetchListOK(data)) //put: non-blocking
        } else {
            yield put(fetchListNG(data))
        }
        yield delay(1000)
        yield put(hideGlobalLoad()) //B4: tắt thanh loading...
    }
}
function* ham2() {
    yield true
    console.log('watching ham2')
}
function* hamRootSaga() {
    yield fork(ham1) //fork: chia 2 nhánh chạy song song async (non-blocking, còn lại hầu hết là blocking)
    /**
     * B5: run next action...
     */
    yield fork(ham2)
}

export default hamRootSaga