import AxiosService from "../utils/AxiosService"
import { API_TOKEN } from "../redux/constants/ConfigConst"

export const dangnhapAPI = arg_data => {
    return AxiosService.post(`${API_TOKEN}`, arg_data)
}