import UserRepository from './UserRepository'
import AuthorizationRepository from './AuthorizationRepository'
import MusicRepository from './MusicRepository'

const repositories = {
    users: UserRepository,
    authentication: AuthorizationRepository,
    music: MusicRepository,
}
export default {
    get: name => repositories[name],
}
