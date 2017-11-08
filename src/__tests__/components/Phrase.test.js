import React from 'react'
import { shallow } from 'enzyme'
import Phrase from 'domain/Phrase'
import PhraseComponent from 'components/Phrase'

const phrase = new Phrase('anId', ['aCategory'], 'lorem ipsum')

describe('Phrase component', () => {
  it('displays a phrase', () => {
    const wrapper = shallow(<PhraseComponent value={phrase} />)

    expect(wrapper.find('p').text()).toEqual(phrase.text)
  })

  it('differenciates important phrases', () => {
    const wrapper = shallow(<PhraseComponent important value={phrase} />)

    expect(wrapper.find('.important')).toHaveLength(1)
  })
})
