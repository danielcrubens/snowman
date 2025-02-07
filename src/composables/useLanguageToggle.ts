
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageToggle = () => {
  const { locale } = useI18n()
  const availableLanguages = ['en', 'pt']

  const toggleLanguage = () => {
    const currentIndex = availableLanguages.indexOf(locale.value)
    const nextIndex = (currentIndex + 1) % availableLanguages.length
    locale.value = availableLanguages[nextIndex]
  }

  return {
    currentLanguage: locale,
    toggleLanguage
  }
}