import Phrase from 'domain/Phrase'
import axios from 'axios'

const URL = process.env.API_URL

class PhraseService {
  async getRandomPhrases (n) {
    const result = await axios.get(URL + 'random/' + n)
    return parsePhrases(result.data.value)
  }
}

const parsePhrases = phrases => phrases.map( phrase => new Phrase(phrase.id, phrase.categories, phrase.joke) )

export default new PhraseService()
