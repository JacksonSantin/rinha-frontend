import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import "prismjs/themes/prism-okaidia.css";

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
