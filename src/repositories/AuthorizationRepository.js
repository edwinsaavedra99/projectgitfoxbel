import { currentBaseURL, Client } from './Clients/deezerClient'
const resource = currentBaseURL() + 'authentication/login/'

export default {
    login (credentials) {
        return Client().post(`${resource}`, credentials)
    },
    getLocalUser () {
        const userStr = localStorage.getItem('user')
        if (!userStr) return null
        return JSON.parse(userStr)
    },
    logout () {
        Client().get(currentBaseURL(), {
            transformRequest: (data, headers) => {
                delete headers.common.Authorization
            },
        })
    },
}
