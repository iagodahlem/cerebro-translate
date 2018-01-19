import parse from './parse'
import translate from './translate'
import { NAME, KEYWORD } from './constants'
import icon from './icon.png'

const fn = ({ term, display }) => {
  const { match, query } = parse(term)

  if (!match) {
    return
  }

  if (match && !query) {
    return display({ icon, title: NAME })
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
  name: NAME,
  keyword: KEYWORD,
  fn,
}
