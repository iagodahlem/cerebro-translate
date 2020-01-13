export const ID = 'id-translate'
export const NAME = 'Translate...'
export const KEYWORD = 'translate'
export const SOURCE = 'auto'
export const TARGET = 'en'

export const getLang = (lang) => LANGS[lang]
export const getLangs = () => Object.values(LANGS)
export const api = ({ query, source, target }) => `${GOOGLE_TRANSLATE_API}&sl=${source}&tl=${target}&dt=t&q=${encodeURI(query)}`

export const GOOGLE_TRANSLATE_API = `https://translate.googleapis.com/translate_a/single?client=gtx`
export const LANGS = {
    auto: {
        code: 'auto',
        name: 'Auto'
    },
    af: {
        code: 'af',
        name: 'Afrikaans'
    },
    sq: {
        code: 'sq',
        name: 'Albanian'
    },
    am: {
        code: 'am',
        name: 'Amharic'
    },
    ar: {
        code: 'ar',
        name: 'Arabic'
    },
    hy: {
        code: 'hy',
        name: 'Armenian'
    },
    az: {
        code: 'az',
        name: 'Azerbaijani'
    },
    eu: {
        code: 'eu',
        name: 'Basque'
    },
    be: {
        code: 'be',
        name: 'Belarusian'
    },
    bn: {
        code: 'bn',
        name: 'Bengali'
    },
    bs: {
        code: 'bs',
        name: 'Bosnian'
    },
    bg: {
        code: 'bg',
        name: 'Bulgarian'
    },
    ca: {
        code: 'ca',
        name: 'Catalan'
    },
    ceb: {
        code: 'ceb',
        name: 'Cebuano'
    },
    zh: {
        code: 'zh',
        name: 'Chinese()'
    },
    co: {
        code: 'co',
        name: 'Corsican'
    },
    hr: {
        code: 'hr',
        name: 'Croatian'
    },
    cs: {
        code: 'cs',
        name: 'Czech'
    },
    da: {
        code: 'da',
        name: 'Danish'
    },
    nl: {
        code: 'nl',
        name: 'Dutch'
    },
    en: {
        code: 'en',
        name: 'English'
    },
    eo: {
        code: 'eo',
        name: 'Esperanto'
    },
    et: {
        code: 'et',
        name: 'Estonian'
    },
    fi: {
        code: 'fi',
        name: 'Finnish'
    },
    fr: {
        code: 'fr',
        name: 'French'
    },
    fy: {
        code: 'fy',
        name: 'Frisian'
    },
    gl: {
        code: 'gl',
        name: 'Galician'
    },
    ka: {
        code: 'ka',
        name: 'Georgian'
    },
    de: {
        code: 'de',
        name: 'German'
    },
    el: {
        code: 'el',
        name: 'Greek'
    },
    gu: {
        code: 'gu',
        name: 'Gujarati'
    },
    ht: {
        code: 'ht',
        name: 'Haitian	Creole'
    },
    ha: {
        code: 'ha',
        name: 'Hausa'
    },
    haw: {
        code: 'haw',
        name: 'Hawaiian'
    },
    he: {
        code: 'he',
        name: 'Hebrew'
    },
    hi: {
        code: 'hi',
        name: 'Hindi'
    },
    hmn: {
        code: 'hmn',
        name: 'Hmong'
    },
    hu: {
        code: 'hu',
        name: 'Hungarian'
    },
    is: {
        code: 'is',
        name: 'Icelandic'
    },
    ig: {
        code: 'ig',
        name: 'Igbo'
    },
    id: {
        code: 'id',
        name: 'Indonesian'
    },
    ga: {
        code: 'ga',
        name: 'Irish'
    },
    it: {
        code: 'it',
        name: 'Italian'
    },
    ja: {
        code: 'ja',
        name: 'Japanese'
    },
    jv: {
        code: 'jv',
        name: 'Javanese'
    },
    kn: {
        code: 'kn',
        name: 'Kannada'
    },
    kk: {
        code: 'kk',
        name: 'Kazakh'
    },
    km: {
        code: 'km',
        name: 'Khmer'
    },
    ko: {
        code: 'ko',
        name: 'Korean'
    },
    ku: {
        code: 'ku',
        name: 'Kurdish'
    },
    ky: {
        code: 'ky',
        name: 'Kyrgyz'
    },
    lo: {
        code: 'lo',
        name: 'Lao'
    },
    la: {
        code: 'la',
        name: 'Latin'
    },
    lv: {
        code: 'lv',
        name: 'Latvian'
    },
    lt: {
        code: 'lt',
        name: 'Lithuanian'
    },
    lb: {
        code: 'lb',
        name: 'Luxembourgish'
    },
    mk: {
        code: 'mk',
        name: 'Macedonian'
    },
    mg: {
        code: 'mg',
        name: 'Malagasy'
    },
    ms: {
        code: 'ms',
        name: 'Malay'
    },
    ml: {
        code: 'ml',
        name: 'Malayalam'
    },
    mt: {
        code: 'mt',
        name: 'Maltese'
    },
    mi: {
        code: 'mi',
        name: 'Maori'
    },
    mr: {
        code: 'mr',
        name: 'Marathi'
    },
    mn: {
        code: 'mn',
        name: 'Mongolian'
    },
    my: {
        code: 'my',
        name: 'Myanmar'
    },
    ne: {
        code: 'ne',
        name: 'Nepali'
    },
    no: {
        code: 'no',
        name: 'Norwegian'
    },
    ny: {
        code: 'ny',
        name: 'Nyanja'
    },
    ps: {
        code: 'ps',
        name: 'Pashto'
    },
    fa: {
        code: 'fa',
        name: 'Persian'
    },
    pl: {
        code: 'pl',
        name: 'Polish'
    },
    pt: {
        code: 'pt',
        name: 'Portuguese'
    },
    pa: {
        code: 'pa',
        name: 'Punjabi'
    },
    ro: {
        code: 'ro',
        name: 'Romanian'
    },
    ru: {
        code: 'ru',
        name: 'Russian'
    },
    sm: {
        code: 'sm',
        name: 'Samoan'
    },
    gd: {
        code: 'gd',
        name: 'Scots Gaelic'
    },
    sr: {
        code: 'sr',
        name: 'Serbian'
    },
    st: {
        code: 'st',
        name: 'Sesotho'
    },
    sn: {
        code: 'sn',
        name: 'Shona'
    },
    sd: {
        code: 'sd',
        name: 'Sindhi'
    },
    si: {
        code: 'si',
        name: 'Sinhala'
    },
    sk: {
        code: 'sk',
        name: 'Slovak'
    },
    sl: {
        code: 'sl',
        name: 'Slovenian'
    },
    so: {
        code: 'so',
        name: 'Somali'
    },
    es: {
        code: 'es',
        name: 'Spanish'
    },
    su: {
        code: 'su',
        name: 'Sundanese'
    },
    sw: {
        code: 'sw',
        name: 'Swahili'
    },
    sv: {
        code: 'sv',
        name: 'Swedish'
    },
    tl: {
        code: 'tl',
        name: 'Tagalog'
    },
    tg: {
        code: 'tg',
        name: 'Tajik'
    },
    ta: {
        code: 'ta',
        name: 'Tamil'
    },
    te: {
        code: 'te',
        name: 'Telugu'
    },
    th: {
        code: 'th',
        name: 'Thai'
    },
    tr: {
        code: 'tr',
        name: 'Turkish'
    },
    uk: {
        code: 'uk',
        name: 'Ukrainian'
    },
    ur: {
        code: 'ur',
        name: 'Urdu'
    },
    uz: {
        code: 'uz',
        name: 'Uzbek'
    },
    vi: {
        code: 'vi',
        name: 'Vietnamese'
    },
    cy: {
        code: 'cy',
        name: 'Welsh'
    },
    xh: {
        code: 'xh',
        name: 'Xhosa'
    },
    yi: {
        code: 'yi',
        name: 'Yiddish'
    },
    yo: {
        code: 'yo',
        name: 'Yoruba'
    },
    zu: {
        code: 'zu',
        name: 'Zulu'
    },
}
