import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PolarisVue from '@ownego/polaris-vue' 
import '@ownego/polaris-vue/dist/style.css'
import { store } from './store'

const app = createApp(App)

app.use(router)
app.use(PolarisVue)
app.use(store)
app.mount('#app')
