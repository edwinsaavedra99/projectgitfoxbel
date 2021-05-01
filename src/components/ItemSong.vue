<template>
  <v-card
    width="206"
    elevation="0"
  >
    <v-img
      class="white--text align-end"
      height="160px"
      width="206px"
      :src="item.album.cover_medium"
    >
      <div style="display: inline-block; position:absolute; top:50%; left:50%; transform: translate(-50%, -50%)">
        <v-img
          class="icon-btn"
          @click="play"
          height="36"
          width="32"
          src="../assets/Foxbel-Music/img.svg"
        />
      </div>
      <div style="display: inline-block; position:absolute; top:10%; left:90%; transform: translate(-50%, -50%)">
        <v-icon
          color="white"
        >
          fa-ellipsis-v
        </v-icon>
      </div>
    </v-img>
    <v-card-subtitle
      class="name-song pb-0"
    >
      {{ item.album.title }}
    </v-card-subtitle>
    <v-card-text
      class="artist-song"
    >
      {{ item.artist.name }}
    </v-card-text>
  </v-card>
</template>
<script>
  import MusicModel from '../models/music.js'
  export default {
    name: 'ItemSong',
    props: {
      song: {
        type: Object,
      },
    },
    data () {
      return {
        item: new MusicModel(),
      }
    },
    created () {
      this.item = this.song
    },
    methods: {
      play () {
        this.$emit('playMusic', this.item)
        console.log('start')
      },
    },
  }
</script>

<style scoped>
  .icon-btn{
    cursor: point
  }
  .name-song{
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #555555;
  }
  .artist-song{
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
  }
</style>
