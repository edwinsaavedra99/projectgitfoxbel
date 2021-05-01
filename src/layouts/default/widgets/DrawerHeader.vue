<template>
  <v-container class="mb-0 justify-space-between pl-3">
    <v-img
      max-height="59"
      max-width="250"
      style="margin-top:50px; margin-left:40px; margin-right:40px; margin-bottom:30px"
      :src="require('@/assets/Foxbel-Music/foxbel-music@2x.png')"
    />
  </v-container>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerHeader',

    computed: { version: get('app/version') },
  }
</script>
