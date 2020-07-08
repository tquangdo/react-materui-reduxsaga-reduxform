import AxiosService from "../utils/AxiosService"
import { API_CONGVIECS } from "../redux/constants/ConfigConst"
import qs from 'query-string'

export const getListAPI = (params = {}) => {
    let queryPara = ''
    if (Object.keys(params).length > 0) {
        queryPara = `?${qs.stringify(params)}`
    }
    return AxiosService.get(`${API_CONGVIECS}${queryPara}`)
}

export const themTaskAPI = data => {
    return AxiosService.post(`${API_CONGVIECS}`, data)
}

export const suaTaskAPI = (data, arg_task_id) => {
    return AxiosService.put(`${API_CONGVIECS}/${arg_task_id}`, data)
}

export const xoaTaskAPI = arg_task_id => {
    return AxiosService.delete(`${API_CONGVIECS}/${arg_task_id}`)
}