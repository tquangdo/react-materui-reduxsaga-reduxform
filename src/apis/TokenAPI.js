import AxiosService from "../utils/AxiosService"
import { API_TOKENS, API_MEMBER_SIGNUP } from "../redux/constants/ConfigConst"

export const dangnhapAPI = arg_data => {
    return AxiosService.post(`${API_TOKENS}`, arg_data)
}
export const dangkiAPI = arg_data => {
    return AxiosService.post(`${API_MEMBER_SIGNUP}`, arg_data)
}