import axios from 'axios'
import { getLocalUserHelper, setAuthorization } from '../../util/helpers'
const baseDomain = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
const baseURL = `${baseDomain}/` // Incase of .../v1

// ALL DEFUALT CONFIGURATION HERE

export function currentBaseURL () {
    if (baseDomain === undefined) {
        return '/'
    }
    return baseURL
}

export function Client () {
    if (getLocalUserHelper() !== null && getLocalUserHelper() !== undefined && getLocalUserHelper().token !== undefined) {
        setAuthorization(getLocalUserHelper().token)
    }
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    return axios
}
