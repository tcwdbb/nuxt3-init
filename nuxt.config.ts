// https://nuxt.com/docs/api/configuration/nuxt-config
// import i18n from "./plugins/i18n"
import { createResolver } from '@nuxt/kit'
import { createRuntimeConfig } from './build'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@hypernym/nuxt-gsap'
    // '@vite-pwa/nuxt'
  ],
  // pwa: {
  //   manifest: {
  //     name: 'PomoDo',
  //     short_name: 'PomoDo',
  //     description: 'A simple material design pomodoro timer to help you focus',
  //     icons: [
  //       {
  //         src: 'icons/logo/256.png',
  //         sizes: '256x256',
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'icons/logo/512.png',
  //         sizes: '512x512',
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'icons/logo/1024.png',
  //         sizes: '1024x1024',
  //         type: 'image/png'
  //       }
  //     ]
  //   }
  //   // workbox: {
  //   //   navigateFallback: '/'
  //   // },
  //   // devOptions: {
  //   //   enabled: true,
  //   //   type: 'module'
  //   // }
  // },
  // vant: {
  //   lazyload: true,
  //   importStyle: true
  // },
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']]
  },
  i18n: {
    vueI18n: './locales/i18n.config.ts'
  },
  imports: {
    dirs: [resolve('./stores'), '~/stores']
  },
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px', // 要转化的单位
        viewportWidth: 375, // UI设计稿的宽度
        viewportHeight: 667, // UI
        unitPrecision: 6, // 转换后的精度，即小数点位数
        // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
        selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        // include: [/node_modules/],
        landscape: false // 是否处理横屏情况
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/default.scss" as *;'
        }
      }
    }
  },
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false
  },
  runtimeConfig: createRuntimeConfig(),
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'http://localhost:3001', // 这里是接口地址
  //       changeOrigin: true
  //       // prependPath: true
  //     }
  //   },
  //   routeRules: {
  //     '/api/**': {
  //       proxy: 'http://localhost:3001/**'
  //     }
  //   }
  // },
  // pwa: {
  //   manifest: {
  //     name: 'My Awesome App',
  //     lang: 'fa',
  //     useWebmanifestExtension: false
  //   }
  // },
  devtools: { enabled: true }
})
