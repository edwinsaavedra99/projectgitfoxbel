import { currentBaseURL, Client } from './Clients/deezerClient'
const resource = currentBaseURL()

export default {
    getAlbum (q) {
        return Client().get(`${resource}search?q=album:"${q}"`)
    },
    getPostAlbum (id) {
        return Client().get(`${resource}album/${id}`)
    },
    getPostArtist (id) {
        return Client().get(`${resource}artist/${id}`)
    },
    getPlayList (id) {
        return Client().get(`${resource}album/${id}/tracks`)
    },
}
