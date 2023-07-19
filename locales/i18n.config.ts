import zhCN from './zh'
import enUS from './en'

const message = {
  zhCN,
  enUS
}

// const Cookies = useCookie('lang')
// Cookies.value = Cookies.value || 'zh'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zhCN',
  messages: message
}))
