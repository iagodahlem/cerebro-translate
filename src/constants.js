export const ID = 'id-translate'
export const NAME = 'Translate...'
export const KEYWORD = 'translate'
export const SOURCE = 'auto'
export const TARGET = 'en'

export const getLang = (lang) => LANGS[lang]

export const LANGS = {
  auto: { code: 'auto', name: 'Auto' },
  ar: { code: 'ar', name: 'Arab' },
  be: { code: 'be', name: 'Belarusian' },
  ca: { code: 'ca', name: 'Catalan' },
  cs: { code: 'cs', name: 'Czech' },
  da: { code: 'da', name: 'Danish' },
  de: { code: 'de', name: 'German' },
  en: { code: 'en', name: 'English' },
  eo: { code: 'eo', name: 'Esperanto' },
  es: { code: 'es', name: 'Spanish' },
  et: { code: 'et', name: 'Estonian' },
  fa: { code: 'fa', name: 'Persian' },
  fi: { code: 'fi', name: 'Finnish' },
  fr: { code: 'fr', name: 'French' },
  ga: { code: 'ga', name: 'Irish' },
  he: { code: 'he', name: 'Hebrew' },
  hi: { code: 'hi', name: 'Hindi' },
  hu: { code: 'hu', name: 'Hungarian' },
  id: { code: 'id', name: 'Indonesian' },
  is: { code: 'is', name: 'Icelandic' },
  it: { code: 'it', name: 'Italian' },
  ja: { code: 'ja', name: 'Japanese' },
  kk: { code: 'kk', name: 'Kazakh' },
  ko: { code: 'ko', name: 'Korean' },
  ky: { code: 'ky', name: 'Kyrgyz' },
  lt: { code: 'lt', name: 'Lithuanian' },
  lv: { code: 'lv', name: 'Latvian' },
  nl: { code: 'nl', name: 'Dutch' },
  no: { code: 'no', name: 'Norwegian' },
  pl: { code: 'pl', name: 'Polish' },
  pt: { code: 'pt', name: 'Portuguese' },
  ro: { code: 'ro', name: 'Romanian' },
  ru: { code: 'ru', name: 'Russian' },
  sk: { code: 'sk', name: 'Slovak' },
  sl: { code: 'sl', name: 'Slovenian' },
  sv: { code: 'sv', name: 'Swedish' },
  th: { code: 'th', name: 'Thai' },
  tr: { code: 'tr', name: 'Turkish' },
  uk: { code: 'uk', name: 'Ukrainian' },
  vi: { code: 'vi', name: 'Vietnamese' },
  yi: { code: 'yi', name: 'Yiddish' },
  zh: { code: 'zh', name: 'Chinese' },
}
