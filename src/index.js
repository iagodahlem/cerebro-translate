import { name, keyword } from './constants'
import translate from './translate'
import icon from './icon.png'

const fn = ({ term, display }) => {
  const words = term.split(' ')
  const first = words[0]
  const match = first === keyword || first === `${keyword} `
  const query = match
    ? words.filter(word => word !== keyword).join(' ')
    : false

  if (!match) {
    return
  }

  if (match && !query) {
    return display({ icon, title: name })
  }

  display({
    icon,
    id: 'translate',
    title: 'Loading...',
  })

  translate({ source: 'pt', term: query })
    .then((response) => {
      display({
        icon,
        id: 'translate',
        title: response,
        subtitle: 'English',
      })
    })
}

export default {
  icon,
  name,
  keyword,
  fn,
}
