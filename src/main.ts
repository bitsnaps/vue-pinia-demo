import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App)
    // use Pinia
    .use(createPinia())
    // mount the app
    .mount('#app')
