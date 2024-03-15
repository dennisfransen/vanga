import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/routers'

import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'

import '@/modules'

const app = createApp(App)

app.component('BaseInput', BaseInput)
app.component('BaseSelect', BaseSelect)

app.use(createPinia())
app.use(router)

app.mount('#app')
