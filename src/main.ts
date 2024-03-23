import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defaultConfig, plugin } from '@formkit/vue'
import config from '@/formkit.config'

import App from '@/App.vue'
import router from '@/routers'

import '@/modules'

import FormInput from '@/components/FormInput.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(plugin, defaultConfig(config))

app.component('FormInput', FormInput)

app.mount('#app')
