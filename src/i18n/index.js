import { createI18n } from 'vue-i18n'
import en from './en.js'
import es from './es.js'

const savedLocale = localStorage.getItem('portfolio-locale') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { en, es },
})
