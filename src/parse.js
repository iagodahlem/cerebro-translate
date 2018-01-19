import { KEYWORD, getLang } from './constants'

const parse = (term) => {
  const words = term.split(' ')
  const [keyword, first, second] = words

  const match = keyword === KEYWORD || keyword === `${KEYWORD} `
  const firstLang = getLang(first)
  const secondLang = getLang(second)

  const isTwoArguments = firstLang && secondLang ? true : false
  const isOneArgument = !isTwoArguments && firstLang ? true : false

  if (isTwoArguments) {
    return {
      match,
      query: words.slice(3).join(' '),
      source: firstLang,
      target: secondLang,
    }
  }

  if (isOneArgument) {
    return {
      match,
      query: words.slice(2).join(' '),
      target: firstLang,
    }
  }

  return {
    match,
    query: match ? words.slice(1).join(' ') : '',
  }
}

export default parse
