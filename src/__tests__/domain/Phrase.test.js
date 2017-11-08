import Phrase from 'domain/Phrase'

describe('Phrase', () => {
  it('differenciates nerdy phrases', () => {
    const phrase = new Phrase('an Id', ['non-nerdy'], 'Some text')
    const nerdyPhrase = new Phrase('an Id', ['nerdy'], 'Some text')

    expect(phrase.isNerdy).toEqual(false)
    expect(nerdyPhrase.isNerdy).toEqual(true)
  })

  it('differenciates long phrases', () => {
    const phrase = new Phrase('an Id', ['non-nerdy'], 'Some text')
    const longPhrase = new Phrase('an Id', ['non-nerdy'], 'Some reeeeeeeeeeeeeeeeeeeeeeeally long text')

    expect(phrase.isLong).toEqual(false)
    expect(longPhrase.isLong).toEqual(true)
  })
})
