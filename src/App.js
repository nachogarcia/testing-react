import React, { Component } from 'react'
import 'App.css'
import phraseService from 'services/Phrase'
import PhraseComponent from 'components/Phrase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      importantPhrase: {},
      randomPhrases: [],
    }
  }

  render() {
    const randomPhrases = this.state.randomPhrases.map( phrase => <PhraseComponent key={phrase.id} value={phrase} /> )

    return (
      <div className="App">
        <div className="App-header">
          <h1>Chuck Norris Phrases</h1>
        </div>
        <h2>Important Phrase</h2>
        <PhraseComponent important value={this.state.importantPhrase}/>
        <h2>Random Phrases</h2>
        {randomPhrases}
      </div>
    )
  }

  async componentWillMount() {
    const randomPhrases = await phraseService.getRandomPhrases(5)
    const importantPhrase = await phraseService.getMostImportantPhrase()
    this.setState({
      randomPhrases,
      importantPhrase
    })
  }
}

export default App
