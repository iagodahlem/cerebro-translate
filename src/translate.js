import { memoize } from 'cerebro-tools'

export const translate = (params) => {
  return fetch(api(params))
    .then(response => response.json())
    .then(data => data[0][0][0])
}

export const api = ({ source = 'auto', target = 'en', term } = {}) => {
  return `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURI(term)}`
}

export default memoize(translate)
