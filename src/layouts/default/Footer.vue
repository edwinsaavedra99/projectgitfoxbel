<template>
  <v-footer
    id="default-footer"
    color="primary"
    padless
    app
    height="100"
    style="z-index:101;"
  >
    <v-row>
      <v-img
        class="small-cover-class"
        :src="album.album.cover_small"
      />
      <div
        class="small-name-class"
      >
        <span class="text-song">
          {{ album.album.title }}
        </span><br>
        <span class="text-artist">
          Artista Album
        </span>
      </div>
      <v-spacer />
      <v-card
        class="d-flex"
        height="100"
        style="background:transparent"
        elevation="0"
      >
        <v-btn
          icon
          style="background:transparent"
          class="align-self-center"
          x-large
          @click="prevSong"
        >
          <v-icon
            x-large
            color="white"
          >
            fa-step-backward
          </v-icon>
        </v-btn>
        <v-btn
          icon
          style="background:transparent"
          class="align-self-center"
          color="second_default"
          fab
          @click="play"
          x-large
        >
          <v-icon
            v-if="!playing"
            x-large
            dark
            color="white"
          >
            fa-play
          </v-icon>
          <v-icon
            v-else
            x-large
            dark
            color="white"
          >
            fa-pause
          </v-icon>
        </v-btn>
        <v-btn
          icon
          style="background:transparent"
          class="align-self-center"
          x-large
          @click="nextSong"
        >
          <v-icon
            x-large
            color="white"
          >
            fa-step-forward
          </v-icon>
        </v-btn>
      </v-card>
      <v-spacer />
      <v-card
        class="d-flex"
        height="100"
        width="200"
        style="background:transparent;  margin-right: 40px;"
        elevation="0"
      >
        <v-slider
          style="max-width:100px; margin-right:20px; margin-top:2rem;"
          color="white"
          v-model="volume"
          @input="updateVolume(volume)"
          max="1"
          step="0.1"
        />
        <v-btn
          icon
          style="background:transparent;"
          class="align-self-center"
          color="second_default"
          fab
          @click="toggleMute"
          x-large
        >
          <v-icon
            v-if="muted"
            x-large
            color="white"
          >
            fa-volume-off
          </v-icon>
          <v-icon
            v-else
            x-large
            color="white"
          >
            fa-volume-up
          </v-icon>
        </v-btn>
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
  import { Howl, Howler } from 'howler'
  import Repository from '../../repositories/RepositoryFactory.js'
  const MusicRepository = Repository.get('music')
  export default {
    name: 'DefaultFooter',
    props: {
      album: {
        type: Object,
      },
      playOther: {
        type: Boolean,
      },
    },
    data () {
      return {
        media: 100,
        alarm: 0,
        zoom: 0,
        track: null,
        howl: null,
        index: 0,
        playing: false,
        loop: false,
        shuffle: false,
        volume: 0.5,
        seek: 0,
        muted: false,
        list: null,
      }
    },
    watch: {
      playOther: function () {
        if (this.playing) {
          this.stop()
          this.playing = !this.playing
        }
        this.howl = null
        this.configureHowl()
        this.play()
      },
    },
    created () {
      this.index = 0
      this.configureHowl()
    },
    methods: {
      configureHowl () {
        this.index = 0
        Howler.volume(this.volume)
        this.getPlayListMethod()
        this.howl = new Howl({
          src: [`${this.list[this.index].preview}`],
          /* onend: () => {
            if (this.loop) {
              this.play(this.index)
            } else {
              this.skip('next')
            }
          }, */
        })
      },
      nextSong () {
        if (this.list[this.index + 1] !== null) {
          console.log(this.list[this.index + 1])
          this.index = this.index + 1
          this.newConfigureSong()
          this.play()
        }
      },
      prevSong () {
        if (this.list[this.index - 1] !== null) {
          this.index = this.index - 1
          this.newConfigureSong()
          this.play()
        }
      },
      newConfigureSong () {
        if (this.playing) {
          this.stop()
          this.playing = !this.playing
        }
        this.howl = null
        this.howl = new Howl({
          src: [`${this.list[this.index].preview}`],
          /* onend: () => {
            if (this.loop) {
              this.play(this.index)
            } else {
              this.skip('next')
            }
          }, */
        })
      },
      play () {
        if (!this.playing) {
          this.howl.play()
          this.playing = true
        } else {
          this.howl.pause()
          this.playing = false
        }
      },
      stop () {
        this.howl.stop()
      },
      getPlayListMethod: async function () {
        const response = await MusicRepository.getPlayList(this.album.album.id)
        console.log(response.data.data)
        this.list = response.data.data
      },
      updateVolume (volume) {
        Howler.volume(volume)
      },
      toggleMute () {
        Howler.mute(!this.muted)
        this.muted = !this.muted
      },
    },
  }
</script>
<style>
  .text-song{
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
  .text-artist{
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
  }
  .v-slider__thumb{
    width: 20px!important;
    height: 20px!important;
  }
  .v-slider--horizontal .v-slider__track-container{
    height: 6px!important;
  }
  .v-slider__thumb-container--active{
    margin-left: 5px!important;
  }
  .small-cover-class{
    max-width:100px;
    max-height:100px;
  }
  .small-name-class{
    margin-left:20px;
    margin-top:24px
  }
  @media (max-width: 600px){
    .small-cover-class {
      display: none!important;
    }
  }
  @media (max-width: 500px){
    .small-name-class {
      display: none!important;
    }
  }
</style>
