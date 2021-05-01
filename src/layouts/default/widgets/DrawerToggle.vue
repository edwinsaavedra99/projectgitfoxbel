<template>
  <v-btn
    class="ml-3 mr-4"
    fab
    text
    small
    @click="mini = !mini"
  >
    <v-icon
      v-if="$vuetify.breakpoint.mdAndUp"
      dark
    >
      {{ mini ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical' }}
    </v-icon>
  </v-btn>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerToggle',

    computed: {

      mini: sync('app/mini'),
    },
  }
</script>
