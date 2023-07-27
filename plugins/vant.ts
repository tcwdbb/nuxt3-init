import {
  Button,
  Calendar,
  Toast,
  Image as VanImage,
  Icon,
  Swipe,
  SwipeItem,
  CountDown,
  Popup
} from 'vant'
// import { defineNuxtPlugin } from '#app'
import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp
    .use(Calendar)
    .use(Button)
    .use(Toast)
    .use(VanImage)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(CountDown)
    .use(Popup)
})
