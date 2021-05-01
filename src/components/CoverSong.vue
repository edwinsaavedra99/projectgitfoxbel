<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-img
        :src="song.album.cover_medium"
        height="250px"
        width="250px"
        class="cover-image-class"
      >
         <div style="display: inline-block; position:absolute; top:50%; left:50%; transform: translate(-50%, -50%)">
           <v-img
            class="icon-btn"
            @click="play"
            height="72"
            width="63"
            src="../assets/Foxbel-Music/img.svg"
          />
         </div>
      </v-img>
      <div class="mask">
        <div class="title-name">
          {{ song.artist.name }}
        </div>
        <span class="title-song">
          Lo mejor de {{ song.artist.name }}
        </span>
        <span
          class="followers"
        >
          {{ itemComplete.fans }} Seguidores
        </span>
        <v-card-text
          style="padding:0px; margin-top:21px;"
          class="text-description"
        >
          Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele,
          es una cantante, compositora y multinstrumentista británica.
        </v-card-text>
        <div style="display: inline-block; position:absolute; top:80%;">
          <v-row>
            <v-btn
              rounded
              color="secondary"
              dark
              height="31px"
              width="117px"
              @click="play"
              class="mr-3"
            >
              Reproducir
            </v-btn>
            <v-btn
              rounded
              color="secondary"
              outlined
              height="31px"
              width="117px"
              class="ml-3"
            >
              Seguir
            </v-btn>
          </v-row>
        </div>
        <div style="display: inline-block; position:absolute; top:90%; left:50%; transform: translate(-50%, -50%)">
          <v-icon
            color="white"
            class="more-information"
          >
            fa-ellipsis-h
          </v-icon>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
  import MusicModel from '../models/music.js'
  import AlbumModel from '../models/album.js'
  import Repository from '../repositories/RepositoryFactory.js'
  const MusicRepository = Repository.get('music')
  export default {
    name: 'CoverSong',
    props: {
      song: {
        type: Object,
        required: null,
      },
    },
    data () {
      return {
        item: new MusicModel(),
        itemComplete: new AlbumModel(),
      }
    },
    created () {
      this.getItem()
    },
    mounted: function () {
      this.applyCSS()
    },
    beforeUpdate: function () {
      this.applyCSS()
    },
    methods: {
      play () {
        this.$emit('playMusic', this.song)
        console.log('start')
      },
      getItem: async function () {
        const response = await MusicRepository.getPostAlbum(this.song.album.id)
        console.log(response)
        this.itemComplete = response.data
      },
      applyCSS () {
        const cssRule = `.mask:before {    
          content:'';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${this.song.album.cover_xl});
          mix-blend-mode: normal;
          opacity: 0.5;
        }`
        const style = document.createElement('style')
        style.type = 'text/css'
        this.$el.appendChild(style)
        style.innerHTML = cssRule
      },
    },
  }
</script>

<style vars="{ cover }">
  .icon-btn{
    cursor: pointer;
  }
  .title-name{
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    z-index:1;
    position:relative;
    color: #FFFFFF;
  }
  .title-song{
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    z-index:1;
    position:relative;
    line-height: 17px;
    color: #FFFFFF;
  }
  .followers{
    margin-left: 16px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    z-index:1;
    position:relative;
    color: #582727;
  }
  .text-description{
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    z-index:1;
    position:relative;
    color: #FFFFFF;
  }
  .mask {
    height: 250px;
    padding-top: 40px;
    padding-left: 32px;
    padding-right: 32px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  .more-information{
    margin-bottom:0px;
  }
  .cover-image-class{
    display: block!important;
  }
  .v-btn{
    text-transform: none!important;
  }
  @media (max-width: 960px){
    .cover-image-class {
      display: none!important;
    }
    .mask {
      height: 350px;
    }
    .more-information{
      margin-bottom:160px;
    }
  }
  @media (max-width: 400px){
    .cover-image-class {
      display: none!important;
    }
    .mask {
      height: 450px;
    }
  }
</style>
