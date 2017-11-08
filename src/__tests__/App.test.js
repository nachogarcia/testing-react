import React from 'react'
import App from 'App'
import { shallow } from 'enzyme'
import phraseService from 'services/Phrase'
import Phrase from 'domain/Phrase'

const wait = () => new Promise(resolve => setImmediate(resolve))

const randomPhrases = [
  new Phrase('id', ['Category'], 'a text'),
  new Phrase('another id', ['a category'], 'another text'),
]
const importantPhrase = new Phrase('an id', ['a category'], 'some text')

phraseService.getRandomPhrases = jest.fn( () => Promise.resolve(randomPhrases) )
phraseService.getMostImportantPhrase = jest.fn( () => Promise.resolve(importantPhrase) )

describe('App', () => {
  it('calls the API', async() => {
    const wrapper = shallow(<App />)
    await wait()

    expect(phraseService.getRandomPhrases).toHaveBeenCalledWith(5)
    expect(phraseService.getMostImportantPhrase).toHaveBeenCalled()
    expect(wrapper.state('randomPhrases')).toEqual(randomPhrases)
    expect(wrapper.state('importantPhrase')).toEqual(importantPhrase)
  })
})
