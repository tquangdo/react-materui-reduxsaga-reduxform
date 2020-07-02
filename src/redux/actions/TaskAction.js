import * as actTypes from '../constants/ActionTypes'

// export const fetchListTaskREQ = () => {
//     return dispatch => {
//         dispatch(resetListTask())
//         taskAPI
//             .getList()
//             .then(res => { dispatch(fetchListOK(res.data)) })
//             .catch(err => { dispatch(fetchListNG(err)) })
//     }
// }
export const resetListTask = () => {
    return {
        type: actTypes.RESET_LIST_TASK,
    }
}
export const fetchListOK = data => {
    return {
        type: actTypes.FECTH_LIST_OK,
        payload: { data },
    }
}
export const fetchListNG = err => {
    return {
        type: actTypes.FETCH_LIST_NG,
        payload: { err },
    }
}
export const themTask = (title, description, type) => {
    return {
        type: actTypes.THEM_TASK,
        payload: { title, description, type },
    }
}
export const themTaskOK = data => {
    return {
        type: actTypes.THEM_TASK_OK,
        payload: { data },
    }
}
export const themTaskNG = err => {
    return {
        type: actTypes.THEM_TASK_NG,
        payload: { err },
    }
}
export const searchTask = kw => {
    return {
        type: actTypes.SEARCH,
        payload: { kw, },
    }
}
export const searchTaskOK = data => {
    return {
        type: actTypes.SEARCH_OK,
        payload: { data },
    }
}
