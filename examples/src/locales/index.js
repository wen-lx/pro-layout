import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-US'
})

export function i18nRender (key) {
  return i18n.t(`${key}`)
}

export default i18n