import './assets/main.css'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Toast from 'vue-toastification';

const app = createApp(App)
const vuetify = createVuetify({ components, directives })
app.use(router)
app.use(vuetify)
app.use(Toast, {})
app.mount('#app')
