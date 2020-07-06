import axios from 'axios'

class AxiosService {
    constructor() {
        const inst = axios.create()
        inst.interceptors.response.use(function (response) {
            return response
        }, function (error) {
            return Promise.reject(error)
        })
        this.instance = inst
    }

    get(url) { return this.instance.get(url) }
    post(url, data) { return this.instance.post(url, data) }
    put(url, data) { return this.instance.put(url, data) }
    delete(url) { return this.instance.delete(url) }
}

export default new AxiosService()