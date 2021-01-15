import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import enLocale from 'element-ui/lib/locale/lang/en'
import zh from './lang/zh.js'
import jpn from './lang/jpn.js'
import en from './lang/en.js'
Vue.use(VueI18n)

localStorage.locale = localStorage.locale ? localStorage.locale : 'zh'
const i18n = new VueI18n({
  locale: localStorage.locale || 'zh',
  messages: {
    zh: {
      ...zh,
      ...zhLocale
    },
    jpn: {
      ...jpn,
      ...jaLocale
    },
    en: {
      ...en,
      ...enLocale
    }
  }
})

export default i18n
