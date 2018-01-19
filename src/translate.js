import { memoize } from 'cerebro-tools'

export const translate = (params) => {
  return fetch(api(params))
    .then(response => response.json())
    .then(data => data[0][0][0])
}

export const api = ({ query, source, target }) => {
  return `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURI(query)}`
}

export default memoize(translate)
