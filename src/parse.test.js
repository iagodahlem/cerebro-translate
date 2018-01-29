import parse from './parse'

describe('parse', () => {
  it('should not match', () => {
    expect(parse('anything')).toEqual({ match: false, query: '' })
    expect(parse('anything else')).toEqual({ match: false, query: '' })
  })

  it('should match with source and target language', () => {
    const term = 'translate en pt some text'
    const expected = {
      match: true,
      query: 'some text',
      source: { code: 'en', name: 'English' },
      target: { code: 'pt', name: 'Portuguese' },
    }

    expect(parse(term)).toEqual(expected)
  })

  it('should match with the frist letter of the keyword', () => {
    const term = 't en pt some text'
    const expected = {
      match: true,
      query: 'some text',
      source: { code: 'en', name: 'English' },
      target: { code: 'pt', name: 'Portuguese' },
    }

    expect(parse(term)).toEqual(expected)
  })

  it('should match with target language', () => {
    const term = 'translate pt some text'
    const expected = {
      match: true,
      query: 'some text',
      target: { code: 'pt', name: 'Portuguese' },
    }

    expect(parse(term)).toEqual(expected)
  })

  it('should match', () => {
    const term = 'translate some text'
    const expected = {
      match: true,
      query: 'some text',
    }

    expect(parse(term)).toEqual(expected)
  })
})
