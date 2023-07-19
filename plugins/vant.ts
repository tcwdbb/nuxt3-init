import { Button, Calendar, Toast } from 'vant'
// import { defineNuxtPlugin } from '#app'
import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Calendar).use(Button).use(Toast)
})
