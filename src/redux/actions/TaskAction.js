import * as taskAPI from '../../apis/TaskAPI'
import * as actTypes from '../constants/ActionTypes'

export const fetchListTaskREQ = () => {
    return dispatch => {
        dispatch(resetListTask())
        taskAPI
            .getList()
            .then(res => { dispatch(fetchListOK(res.data)) })
            .catch(err => { dispatch(fetchListNG(err)) })
    }
}
export const resetListTask = () => {
    return {
        type: actTypes.RESET_LIST_TASK
    }
}
export const fetchListOK = data => {
    return {
        type: actTypes.FECTH_LIST_OK,
        payload: { data }
    }
}
export const fetchListNG = err => {
    return {
        type: actTypes.FETCH_LIST_NG,
        payload: { err }
    }
}