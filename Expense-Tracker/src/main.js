import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.use(Toast);
app.mount('#app')
