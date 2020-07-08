import { fork, all } from 'redux-saga/effects'
import hamTaskSaga from './TaskSaga';
import hamAuthSaga from './AuthSaga';
function* hamRootSaga() {
    yield all([yield fork(hamTaskSaga), yield fork(hamAuthSaga)]);
}

export default hamRootSaga