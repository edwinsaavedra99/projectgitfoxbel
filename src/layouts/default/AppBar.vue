<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="white"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="100"
    style="border-bottom-style:solid; border-bottom-color:#6B6B6D; border-bottom-width:1px; z-index:10;"
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />
    <default-drawer-toggle
      v-if="!$vuetify.breakpoint.mdAndUp"
    />
    <default-search
      @searchGeneral="emitSearch"
      class="hidden-sm-and-down mx-3"
    />
    <v-spacer />
    <default-account />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultBar',
    components: {
      DefaultAccount: () => import(
        /* webpackChunkName: "default-account" */
        './widgets/Account'
      ),
      DefaultDrawerToggle: () => import(
        /* webpackChunkName: "default-drawer-toggle" */
        './widgets/DrawerToggle'
      ),
      DefaultSearch: () => import(
        './widgets/Search'
      ),
      DefaultGoHome: () => import(
        './widgets/GoHome'
      ),
      /* DefaultNotifications: () => import(
        './widgets/Notifications'
      ), */
    },
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
      company: '',
      site: '',
      location: '',
      resolvedTimeZone: '',
    }),
    created () {
      this.resolvedTimeZone = Intl.DateTimeFormat().resolvedOptions()
      console.log('El nombre de tu zona horaria es ', this.resolvedTimeZone.timeZone)
    },
    computed: {
      ...sync('app', [
        'drawer',
        'mini',
      ]),
      name: get('route/name'),
    },
    methods: {
      emitSearch (q) {
        this.$emit('searchGeneral', q)
      },
    },
  }
</script>
