// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})



import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.mount('#app')

  