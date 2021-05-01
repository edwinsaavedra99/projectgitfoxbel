<template>
  <v-main>
    <v-container
      fluid
      class="ma-0 pa-0"
    >
      <router-view
        :key="$route.path"
        :search="search"
        @playMusic="play"
      />
    </v-container>
  </v-main>
</template>

<script>
  import { get } from 'vuex-pathify'
  import ApiNavigation from '../../util/apiNavigation.js'
  export default {
    name: 'DefaultView',
    props: {
      search: {
        type: Object,
      },
    },
    data: () => ({
      model: null,
      item: [2],
    }),
    computed: {
      ...get('app', [
        'items',
        'version',
      ]),
      itemsApi () {
        return ApiNavigation.views
      },
    },
    methods: {
      play (a) {
        this.$emit('playMusic', a)
      },
    },
  }
</script>
