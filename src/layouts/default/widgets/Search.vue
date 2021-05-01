<template>
  <v-text-field
    v-model="select"
    :loading="loading"
    class="pa-0"
    hide-details
    hide-no-data
    item-text="title"
    style="max-width:524px;"
    dense
    rounded
    append-icon="fa-search"
    outlined
    placeholder="Buscar"
    @keyup.enter="searchQuery"
  />
</template>

<script>
  import { get } from 'vuex-pathify'
  import Repository from '../../../repositories/RepositoryFactory.js'
  import ApiNavigation from '../../../util/apiNavigation.js'
  const MusicRepository = Repository.get('music')
  export default {
    name: 'DefaultSearch',
    data () {
      return {
        loading: false,
        itemsSearch: [],
        search: null,
        select: null,
      }
    },
    computed: {
      ...get('app', [
        'items',
        'version',
      ]),
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.itemsSearch = this.items.filter(e => {
            return (e.title || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
      searchQuery: async function () {
        const response = await MusicRepository.getAlbum(this.select)
        console.log(response.data)
        ApiNavigation.setCurrent(response.data)
        this.$emit('searchGeneral', response.data)
      },
    },
  }
</script>
<style scoped>
  .theme--light.v-input input, .theme--light.v-input textarea{
    color: inherit!important;
  }
</style>
