import AxiosService from "../utils/AxiosService"
import { API_URL } from "../redux/constants/ConfigConst"

export const getList = () => {
    return AxiosService.get(`${API_URL}/congviecs`)
}

export const themTask = data => {
    return AxiosService.post(`${API_URL}/congviecs`, data)
}