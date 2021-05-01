<template>
  <div
    style="font-size: small"
    class="ma-0 pa-0"
  >
    <v-row class="ma-0 pa-0">
      <p class="mt-3 ma-3 mb-0 pb-0">
        Ir a Página:
      </p>
      <v-select
        v-model="index_page"
        dense
        class="mt-0 mb-0 pt-2"
        style="max-width: 50px; font-size: small; text-align: center; height:50px"
        :items="itemsPag"
        @change="changeSelect"
      />
      <p class="mt-3 ma-3 mb-0 pb-0">
        {{ startDatapage }}-{{ endDatapage }} de {{ length }}
      </p>
      <v-btn
        class="mx-2 mt-3 mb-0 pb-0"
        icon
        x-small
        :disabled="!availablePrev"
        @click="previosPage"
      >
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn
        class="ml-2 mr-5 mt-3 mb-0 pb-0"
        icon
        x-small
        :disabled="!availableNext"
        @click="nextPage"
      >
        <v-icon> mdi-chevron-right </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: 'Pagination',
    props: {
      itemsPag: {
        type: Array,
        default: null,
      },
      lengthData: {
        type: Number,
        default: 0,
      },
    },
    data () {
      return {
        name: 'Pagination', // name component
        index_page: 1, // page size
        page: 1, // number page
        availableNext: false,
        availablePrev: false,
        length: 0,
      }
    },
    computed: {
      startDatapage () {
        if (this.length === 0) {
          return 0
        }
        if (this.index_page === 'Todos') {
          return 1
        }
        return this.index_page * (this.page - 1) + 1
      },
      endDatapage () {
        if (this.length === 0) {
          return 0
        }
        if (this.index_page * this.page >= this.length) {
          return this.length
        } else if (this.index_page === 'Todos') {
          return this.length
        }
        return this.index_page * this.page
      },
    },
    updated () {
      if (this.length === this.lengthData) {
        this.length = this.lengthData
        this.page = 1
      }
    },
    created () {
      this.length = this.lengthData
      this.index_page = this.itemsPag[0]
      if (this.index_page < this.length) {
        this.availableNext = true
      }
      this.dataEmit()
      this.pageEmit()
    },
    methods: {
      changeSelect () {
        this.page = 1
        if (this.index_page * this.page <= this.length) {
          this.availableNext = true
        } else {
          this.availableNext = false
        }
        if (this.page === 1) {
          this.availablePrev = false
        } else {
          this.availablePrev = true
        }
        if (this.index_page * (this.page - 1) + 1 > this.length) {
          this.availablePrev = false
        }
        this.dataEmit()
        this.pageEmit()
      },
      nextPage () {
        this.page++
        this.availablePrev = true
        if (this.index_page * (this.page + 1) <= this.length) {
          this.availableNext = true
        } else {
          this.availableNext = false
        }
        this.dataEmit()
      },
      previosPage () {
        this.page--
        this.availableNext = true
        if (this.page === 1) {
          this.availablePrev = false
        } else {
          this.availablePrev = true
        }
        this.dataEmit()
      },
      pageEmit () {
        if (this.index_page === 'Todos') {
          this.$emit('page', this.length)
        }
        this.$emit('page', this.index_page)
      },
      dataEmit () {
        this.$emit('slicePage', {
          start: this.startDatapage,
          end: this.endDatapage,
        })
      },
    },
  }
</script>
