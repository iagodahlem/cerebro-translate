import { memoize } from 'cerebro-tools'
import { api } from './constants'

export const translate = (params) => {
  return fetch(api(params))
    .then(response => response.json())
    .then(data => data[0][0][0])
}

export default memoize(translate)
