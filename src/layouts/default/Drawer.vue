<template>
  <v-navigation-drawer
    id="default-drawer"
    v-model="drawer"
    :dark="true"
    color="accent"
    :right="$vuetify.rtl"
    :mini-variant.sync="mini"
    mini-variant-width="0"
    app
    width="330"
    style="z-index:100;"
  >
    <default-drawer-header />
    <default-list :items="items" />
    <div class="space">
    </div>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',

    components: {
      DefaultDrawerHeader: () => import(
        /* webpackChunkName: "default-drawer-header" */
        './widgets/DrawerHeader'
      ),
      DefaultList: () => import(
        /* webpackChunkName: "default-list" */
        './List'
      ),
    },

    computed: {
      ...get('user', [
        'dark',
        'gradient',
        'image',
      ]),
      ...get('app', [
        'items',
        'version',
      ]),
      ...sync('app', [
        'drawer',
        'drawerImage',
        'mini',
      ]),
    },
  }
</script>

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px
  .space
    height: 0px
  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
  @media (max-width: 950px )
    .space
      height: 200px
</style>
