// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import ripple from 'vuetify/lib/directives/ripple'
import 'font-awesome/css/font-awesome.min.css'
import myiconmenu from '../assets/Foxbel-Music/menu-horizontal.svg'

Vue.use(Vuetify, { directives: { ripple } })

const theme = {
  primary: '#EB5757',
  secondary: '#E86060',
  accent: '#662323',
  info: '#00CAE3',
  success: '#4CAF50',
  warning: '#FB8C00',
  error: '#FF5252',
  default: '#E91E63',
  second_default: '#FF7676',
}

export default new Vuetify({
  breakpoint: { mobileBreakpoint: 960 },
  icons: {
    values: {
      expand: 'mdi-menu-down',
      customIconSvg: myiconmenu,
    },
    iconfont: 'fa4',
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
