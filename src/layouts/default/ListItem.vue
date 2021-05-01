<template>
  <v-list-item
    :href="item.href"
    :rel="item.href ? 'nofollow' : undefined"
    :target="item.href ? '_blank' : undefined"
    :to="item.to"
    active-class="secondary--text"
    link
    v-bind="$attrs"
    v-on="$listeners"
    class="pa-0 ma-0"
    style="padding:0px; margin:0px;"
  >
    <!--ESTO PARA CAMBIAR DE MENUS: @click="item.active=true"-->
    <span
      :class="active"
    >
    </span>
    <v-list-item-content
      v-if="item.title"
      class="pt-1 pb-1"
    >
      <v-list-item-title
        v-text="item.title"
        style="margin-left:50px;"
        :class="activeItems"
      />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  export default {
    name: 'DefaultListItem',

    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },
    created () {
      console.log(this.$router.currentRoute.path)
    },
    computed: {
      title () {
        const matches = this.item.title.match(/\b(\w)/g)

        return matches.join('')
      },
      active () {
        if (this.item.active) {
          return 'rectangle'
        } else {
          return 'nope'
        }
      },
      activeItems () {
        if (this.item.active) {
          return 'title-items-active'
        } else {
          return 'title-items'
        }
      },
    },
  }
</script>
<style scoped>
  .rectangle{
    /* Rectangle 2 */
    width: 5px;
    height: 20px;
    left: 0px;
    top: 171px;
    /* Red Principal */
    background: #E86060;
  }
  .title-items{
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  .title-items-active{
    font-family: Quicksand;
    font-size: 16px;
    font-style: bold;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  .v-list-item{
    min-height: 38px;
  }
</style>
