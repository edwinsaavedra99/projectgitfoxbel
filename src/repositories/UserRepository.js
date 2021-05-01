import { currentBaseURL, Client } from './Clients/deezerClient'
import { getRandomInt } from '../util/helpers'
const resource = currentBaseURL() + 'authentication/user'

export default {
    get () {
        return Client().get(`${resource}/list/`)
    },
    getPost (id) {
        return Client().get(`${resource}/detail/${id}/`)
    },
    create (data) {
        return Client().post(`${resource}/create/`, data)
    },
    update (data, id) {
        return Client().put(`${resource}/update/${id}/`, data)
    },
    delete (id) {
        return Client().delete(`${resource}/${id}`)
    },
}
