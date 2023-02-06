import brazilFlag from '../../assets/brazil.svg'
import usaFlag from '../../assets/USA.svg'

import en_us from './languages/en_us.json'
import pt_br from './languages/pt_br.json'

export const languages = [
  {
    flag: usaFlag,
    name: 'en-US',
    file: en_us,
    desc: 'languageDescriptionEnUs'
  },
  {
    flag: brazilFlag,
    name: 'pt-BR',
    file: pt_br,
    desc: 'languageDescriptionPtBr'
  },
]

const getCurrentLanguage = () => {
  const locale = localStorage.getItem('@romullolealCurriculo:language')
    ? localStorage.getItem('@romullolealCurriculo:language')
    : navigator.language

  const result = languages.find(
    (language: { name: string; file: unknown }) => language.name === locale
  )

  return result || { name: 'en-US', file: en_us }
}

export const translate = (value: string) => {
  const translations = getCurrentLanguage().file
  if (!translations[value as keyof typeof translations]) return value
  return translations[value as keyof typeof translations]
}

export const currentLanguage = getCurrentLanguage().name
export const setLanguage = (value: string) => {
  localStorage.setItem('@romullolealCurriculo:language', value)
  window.location.reload()
}
