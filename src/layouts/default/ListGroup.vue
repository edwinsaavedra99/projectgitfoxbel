<template>
  <div
    color="white"
    no-action
    v-bind="$attrs"
    class="pa-0 ma-0"
    style="padding:0px; margin:0px;"
  >
    <v-list-item-content v-if="item.title">
      <v-list-item-title
        v-text="item.title"
        class="title-group"
        style="margin-left:50px;"
      />
    </v-list-item-content>
    <template v-for="(child, i) in item.items">
      <default-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />

      <default-list-item
        v-if="!child.items"
        :key="`child-${i}`"
        :item="child"
      />
    </template>
  </div>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultListGroup',

    components: {
      DefaultListItem: () => import('./ListItem'),
    },

    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },

    computed: {
      gradient: get('user/drawer@gradient'),
      group () {
        return this.genGroup(this.item.items)
      },
      title () {
        const matches = this.item.title.match(/\b(\w)/g)

        return matches.join('')
      },
    },

    methods: {
      genGroup (items) {
        return items.reduce((acc, cur) => {
          if (!cur.to) return acc

          acc.push(
            cur.items
              ? this.genGroup(cur.items)
              : cur.to.slice(1, -1),
          )

          return acc
        }, []).join('|')
      },
    },
  }
</script>
<style scoped>
.title-group{
  font-family: Quicksand;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
