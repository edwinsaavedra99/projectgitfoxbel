<template>
  <v-row
    class="d-flex flex-row-reverse"
  >
    <span
      style="margin-top:10px; margin-right:40px; margin-left:12px;"
      class="name-account"
    >
      Francisco M.
    </span>
    <v-btn
      class="ml-2"
      min-width="0"
      text
      color="primary"
    >
      <v-icon>
        fa-user
      </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
  import RepositoryFactory from '../../../repositories/RepositoryFactory'
  import Proxyable from 'vuetify/lib/mixins/proxyable'
  import { get, sync } from 'vuex-pathify'
  const AuthorizationRepository = RepositoryFactory.get('authentication')

  export default {
    name: 'DefaultAccount',
    mixins: [Proxyable],
    data: () => ({
      profile: [
        { title: 'Profile' },
        { divider: true },
        { title: 'Log out' },
      ],
      color: '#1f1e46',
      colors: [
        '#9C27b0',
        '#00CAE3',
        '#4CAF50',
        '#ff9800',
        '#E91E63',
        '#FF5252',
        '#1f1e46',
        '#c7a75b',
      ],
      menu: false,
      saveImage: '',
    }),
    computed: {
      ...sync('app', [
        'drawer',
        'drawerImage',
        'mini',
      ]),
      ...sync('user', [
        'drawer@gradient',
        'drawer@image',
      ]),
      ...get('user', [
        'images',
        'gradients',
      ]),
    },
    watch: {
      color (val) {
        this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
        this.$vuetify.theme.themes[this.isLight ? 'light' : 'dark'].primary = val
      },
      setSidebarColor (val) {
        this.$store.commit('SET_SIDEBAR_COLOR', val)
      },
    },
    methods: {
      goProfile () {
        console.log('go profile')
        console.log(AuthorizationRepository.getLocalUser())
      },
      logout () {
        sessionStorage.clear()
        localStorage.clear()
        this.$router.push({ path: '/' })
      },
      log () {
        console.log('prefference')
      },
    },
  }
</script>
<style lang="sass">
  .name-account
    font-family: Quicksand
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 20px
    letter-spacing: 0em
    color: #4F4F4F
  .v-settings
    .v-item-group > *
      cursor: pointer

    &__item
      border-width: 3px
      border-style: solid
      border-color: transparent !important

      &--active
        border-color: #00cae3 !important
</style>
