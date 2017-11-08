import Phrase from 'domain/Phrase'
import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

class PhraseService {
  async getRandomPhrases (n) {
    const result = await axios.get(URL + 'random/' + n)
    return parsePhrases(result.data.value)
  }

  async getMostImportantPhrase () {
    const result = await axios.get(URL + '503')
    return parsePhrase(result.data.value)
  }
}

const parsePhrase = phrase => new Phrase(phrase.id, phrase.categories, phrase.joke)

const parsePhrases = phrases => phrases.map( phrase => parsePhrase(phrase) )

export default new PhraseService()
