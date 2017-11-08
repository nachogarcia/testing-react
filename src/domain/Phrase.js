const longPhraseThreshold = 10

export default class Phrase {
  constructor (id, categories, text) {
    this.id = id
    this.categories = categories
    this.text = text
  }

  get isNerdy () {
    return this.categories.includes('nerdy')
  }

  get isLong () {
    return this.text.length > longPhraseThreshold
  }
}
