<template>
  <v-app>
    <default-drawer app />
    <default-bar
      style="position:fixed;"
      @searchGeneral="search"
    />
    <default-view
      style="background:white;"
      :search="currentSearch"
      @playMusic="play"
    />
    <default-footer
      v-if="album!=null"
      :album="album"
      :playOther="playOther"
    />
  </v-app>
</template>

<script>
  import RepositoryFactory from '../../repositories/RepositoryFactory'
  const AuthorizationRepository = RepositoryFactory.get('authentication')
  export default {
    name: 'DefaultLayout',
    /* beforeRouteEnter (to, from, next) {
      if (AuthorizationRepository.getLocalUser() !== null && AuthorizationRepository.getLocalUser().token !== undefined) {
        next()
      } else {
        next('login')
      }
    }, */
    components: {
      DefaultBar: () => import(
        './AppBar'
      ),
      DefaultDrawer: () => import(
        './Drawer'
      ),
      DefaultView: () => import(
        './View'
      ),
      DefaultFooter: () => import(
        './Footer'
      ),
    },

    data: () => ({
      currentSearch: null,
      color: 'info',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      direction: 'bottom center',
      directions: [
        'top left',
        'top center',
        'top right',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
      snackbar: false,
      text: '',
      album: null,
      playOther: false,
    }),

    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
    methods: {
      play (a) {
        this.loadAlbum(a)
        this.playOther = !this.playOther
      },
      search (q) {
        console.log(q)
        this.currentSearch = q
        if (this.currentSearch !== null && this.currentSearch.data !== null && this.currentSearch.data.length > 0) {
          this.loadAlbum(this.currentSearch.data[0])
        }
      },
      loadAlbum (a) {
        console.log(a)
        this.album = a
      },
    },
  }
</script>
<style>
  ::-webkit-scrollbar{
    width: 9px;     /* Tamaño del scroll en vertical */
    height: 9px;    /* Tamaño del scroll en horizontal */
  }
  ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
  }
  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  /* Cambiamos el fondo cuando esté en active */
  ::-webkit-scrollbar-thumb:active {
      background-color: #999999;
  }
  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  ::-webkit-scrollbar-track {
      background: #e1e1e1;
      border-radius: 4px;
  }
  /* Cambiamos el fondo cuando esté en active o hover */
  ::-webkit-scrollbar-track:hover,
  ::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }
</style>
