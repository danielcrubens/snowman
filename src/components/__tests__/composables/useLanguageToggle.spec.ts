import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useLanguageToggle } from '../../../composables/useLanguageToggle'

vi.mock('vue-i18n', () => ({
  useI18n: vi.fn(() => ({
    locale: {
      value: 'en'
    }
  }))
}))

describe('useLanguageToggle', () => {
  let languageToggle: ReturnType<typeof useLanguageToggle>
  
  beforeEach(() => {
    vi.clearAllMocks()
    languageToggle = useLanguageToggle()
  })

  it('deve iniciar com o idioma padrão (pt)', () => {
    expect(languageToggle.currentLanguage.value).toBe('en')
  })

  it('deve alternar de inglês para português', () => {
    expect(languageToggle.currentLanguage.value).toBe('en')
    languageToggle.toggleLanguage()
    expect(languageToggle.currentLanguage.value).toBe('pt')
  })

  it('deve alternar de português para inglês', () => {
    languageToggle.currentLanguage.value = 'pt'
    
    expect(languageToggle.currentLanguage.value).toBe('pt')
    languageToggle.toggleLanguage()
    expect(languageToggle.currentLanguage.value).toBe('en')
  })

  it('deve manter o ciclo de alternância entre os idiomas disponíveis', () => {
    expect(languageToggle.currentLanguage.value).toBe('en')
    
    languageToggle.toggleLanguage() 
    expect(languageToggle.currentLanguage.value).toBe('pt')
    
    languageToggle.toggleLanguage() 
    expect(languageToggle.currentLanguage.value).toBe('en')
    
    languageToggle.toggleLanguage() 
    expect(languageToggle.currentLanguage.value).toBe('pt')
  })

  it('deve lidar com um idioma inicial inválido', () => {
    languageToggle.currentLanguage.value = 'invalid' as any
    
    languageToggle.toggleLanguage()
    expect(['en', 'pt']).toContain(languageToggle.currentLanguage.value)
  })
})