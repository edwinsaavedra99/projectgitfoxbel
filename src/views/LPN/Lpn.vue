<template>
  <v-main
    class="ma-0 pl-10 pr-10 pt-0"
    v-if="search!=null"
  >
    <cover-song
      :song="getItem"
      @playMusic="play"
    />
    <div
      @click="stateSearch()"
      class="text-cover"
    >
      Resultados
    </div>
    <v-row>
      <v-col
        v-for="object in search.data"
        :key="object.id"
        class="columns-5"
      >
        <item-song
          :song="object"
          @playMusic="play"
        />
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
  import Repository from '../../repositories/RepositoryFactory.js'
  import CoverSong from '../../components/CoverSong.vue'
  import ItemSong from '../../components/ItemSong.vue'
  import ApiNavigation from '../../util/apiNavigation.js'
  // const AuthorizationRepository = Repository.get('authentication')
  const MusicRepository = Repository.get('music')
  export default {
    name: 'Lpns',
    props: {
      search: {
        type: Object,
      },
    },
    components: {
      CoverSong,
      ItemSong,
    },
    created () {
      this.searchQuery()
    },
    computed: {
      getItem () {
        if (this.search !== null && this.search.data !== null && this.search.data.length > 0) {
          return this.search.data[0]
        }
        return ''
      },
    },
    data () {
      return {
        valid: false,
        showData: false,
        item: {
          name: 'Adele',
        },
      }
    },
    methods: {
      methodFilter (formFields) {
        console.log(formFields.value)
      },
      stateSearch () {
        console.log(this.search)
      },
      searchQuery: async function () {
        // Por defecto
        const response = await MusicRepository.getAlbum('21')
      },
      play (a) {
        this.$emit('playMusic', a)
      },
    },
  }
</script>
<style scoped>
  .text-cover{
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    color: #E86060;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .columns-5 {
    width: 20%;
    max-width: 20%;
    flex-basis: 20%;
  }
  @media (max-width: 960px){
    .columns-5 {
      width: 32%;
      max-width: 32%;
      flex-basis: 32%;
    }
  }
  @media (max-width: 400px){
    .columns-5 {
      width: 50%;
      max-width: 50%;
      flex-basis: 50%;
    }
  }
</style>
