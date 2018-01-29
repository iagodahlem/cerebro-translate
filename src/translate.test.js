import translate from './translate'

describe('translate', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
      .mockReturnValue(new Promise(resolve => {
        resolve({ json: () => [[['my translated phrase']]]})
      }))
  })

  it('return a result', async () => {
    const result = await translate({})

    expect(result).toBe('my translated phrase')
  })
})
