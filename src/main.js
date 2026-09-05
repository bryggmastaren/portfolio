import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify.js' /* ha med .js? */

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

// skapa appen baserat (?) på App.vue
app.mount('#app')
