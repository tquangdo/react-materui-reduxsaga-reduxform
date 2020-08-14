import * as actTypes from '../constants/ActionTypes'
import { STATUS } from '../../constants/CommonConstants'

export const resetListTask = (params = {}) => {
    return {
        type: actTypes.RESET_LIST_TASK,
        payload: { params, }
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
export const editTask = arg_mock => {
    return {
        type: actTypes.EDIT_TASK,
        payload: { arg_mock, },
    }
}
export const suaTask = (title, description, type, status = STATUS[0].value) => {
    return {
        type: actTypes.SUA_TASK,
        payload: { title, description, type, status },
    }
}
export const suaTaskOK = data => {
    return {
        type: actTypes.SUA_TASK_OK,
        payload: { data },
    }
}
export const suaTaskNG = err => {
    return {
        type: actTypes.SUA_TASK_NG,
        payload: { err },
    }
}
export const xoaTask = arg_id => {
    return {
        type: actTypes.XOA_TASK,
        payload: { arg_id },
    }
}
export const xoaTaskOK = arg_id => {
    return {
        type: actTypes.XOA_TASK_OK,
        payload: { arg_id },
    }
}
export const xoaTaskNG = err => {
    return {
        type: actTypes.XOA_TASK_NG,
        payload: { err },
    }
}

