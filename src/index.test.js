jest.mock('./translate')

import plugin from './'
import translate from './translate'
import { ID, NAME, getLangs } from './constants'
import icon from './icon.png'

describe('plugin', () => {
  let display
  let actions
  let translated

  const callPlugin = (term) => {
    plugin.fn({ display, actions, term })
  }

  const testDisplayCall = ({ title, subtitle }) => {
    expect(display).toBeCalled()

    expect(display.mock.calls[0][0].icon).toBe(icon)
    expect(display.mock.calls[0][0].id).toBe(ID)
    expect(display.mock.calls[0][0].title).toBe('Loading...')

    expect(display.mock.calls[1][0].icon).toBe(icon)
    expect(display.mock.calls[1][0].id).toBe(ID)
    expect(display.mock.calls[1][0].title).toBe(title)
    expect(display.mock.calls[1][0].subtitle).toBe(subtitle)
  }

  const testTranslateCall = ({ query, source, target }) => {
    expect(translate).toBeCalled()
    expect(translate).toBeCalledWith({
      query,
      source,
      target,
    })
  }

  beforeEach(() => {
    display = jest.fn()
    actions = { copyToClipboard: jest.fn() }
    translate.mockImplementation(() => new Promise(resolve => {
      resolve('result')
      translated = Promise.resolve()
    }))
  })

  it('not display', () => {
    callPlugin('will not match')

    expect(display)
      .not.toBeCalled()
  })

  it('display default title without query', () => {
    callPlugin('t')
    callPlugin('t ')
    callPlugin('translate')
    callPlugin('translate ')

    expect(display).toBeCalled()
    expect(display).toBeCalledWith({ icon, title: NAME })
    expect(display).lastCalledWith({ icon, title: NAME })
  })

  it('display list of languages', () => {
    callPlugin('translate l')
    callPlugin('translate languages')

    expect(display).toBeCalled()
  })

  it('display loading and the result with no parameters', async () => {
    callPlugin('translate query')

    await translated

    testDisplayCall({ title: 'result', subtitle: 'English' })
    testTranslateCall({ query: 'query', source: 'auto', target: 'en' })
  })

  it('display loading and the result with target', async () => {
    callPlugin('translate es pelota')

    await translated

    testDisplayCall({ title: 'result', subtitle: 'Spanish' })
    testTranslateCall({ query: 'pelota', source: 'auto', target: 'es' })
  })

  it('display loading and the result with source and target', async () => {
    callPlugin('translate en pt query')

    await translated

    testDisplayCall({ title: 'result', subtitle: 'Portuguese' })
    testTranslateCall({ query: 'query', source: 'en', target: 'pt' })
  })
})
