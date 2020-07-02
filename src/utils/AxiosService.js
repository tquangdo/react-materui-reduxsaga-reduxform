import axios from 'axios'

class AxiosService {
    constructor() {
        const inst = axios.create()
        inst.interceptors.response.use(this.hamSuccess, this.hamError)
        this.instance = inst
    }

    hamSuccess(res) { return res }
    hamError(err) { return Promise.reject(err) }
    get(url) { return this.instance.get(url) }
    post(url, data) { return this.instance.post(url, data) }
}

export default new AxiosService()