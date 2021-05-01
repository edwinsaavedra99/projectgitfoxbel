// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: false,
  mini: false,
  items: [
    {
      title: 'Mi librería',
      to: 'foxbel',
      items: [
        {
          title: 'Recientes',
          to: 'admin-foxbel',
          active: true,
        },
        {
          title: 'Artistas',
          to: '/lpn/aasddmin-lpn/',
          active: false,
        },
        {
          title: 'Albums',
          to: '/lpn/admasfasin-lpn/',
          active: false,
        },
        {
          title: 'Canciones',
          to: '/lpn/adasfmin-lpn/',
          active: false,
        },
        {
          title: 'Estaciones',
          to: '/lpn/adasfin-lpn/',
          active: false,
        },
      ],
    },
    {
      title: 'Playlist',
      to: '/travel/general-data/',
      items: [
        {
          title: 'Metal',
          to: '/lpn/admigasfn-lpn/',
          active: false,
        },
        {
          title: 'Para Bailar',
          to: '/lpn/adasdmin-lpn/',
          active: false,
        },
        {
          title: 'Rock 90s',
          to: '/lpn/admasgin-lpn/',
          active: false,
        },
        {
          title: 'Baladas',
          to: '/lpn/admasin-lpn/',
          active: false,
        },
      ],
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
