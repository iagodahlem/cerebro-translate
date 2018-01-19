import parse from './parse'
import translate from './translate'
import { ID, NAME, KEYWORD, SOURCE, TARGET, getLang } from './constants'
import icon from './icon.png'

const fn = async ({ term, display }) => {
  const { match, query, source, target } = parse(term)

  if (!match) {
    return
  }

  if (match && !query) {
    display({ icon, title: NAME })
    return
  }

  display({
    icon,
    id: ID,
    title: 'Loading...',
  })

  const { code: sourceCode } = source || getLang(SOURCE)
  const { code: targetCode, name } = target || getLang(TARGET)

  const title = await translate({
    query,
    source: sourceCode,
    target: targetCode,
  })

  display({
    icon,
    id: ID,
    title,
    subtitle: name,
  })
}

export default {
  icon,
  name: NAME,
  keyword: KEYWORD,
  fn,
}
