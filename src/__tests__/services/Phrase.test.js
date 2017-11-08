import phraseService from 'services/Phrase'
import Phrase from 'domain/Phrase'

describe('Phrase service', () => {
  it('gets random phrases', async () => {
    const n = 3
    const call = phraseService.getRandomPhrases(n)

    await expect(call).resolves.toHaveLength(n)

    const phrases = await call

    phrases.forEach( phrase => {
      expect(phrase).toBeInstanceOf(Phrase)
      expect(phrase.id).toBeDefined()
      expect(phrase.categories).toBeInstanceOf(Array)
      expect(typeof phrase.text).toBe('string')
    })
  })
})
