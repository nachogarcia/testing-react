import React, { Component } from 'react'
import 'App.css'
import phraseService from 'services/Phrase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      importantPhrase: {},
      randomPhrases: [],
    }
  }

  render() {
    const randomPhrases = this.state.randomPhrases.map( phrase => <p className="phrase" key={phrase.id}>{phrase.text}</p> )

    return (
      <div className="App">
        <div className="App-header">
          <h1>Chuck Norris Phrases</h1>
        </div>
        <h2>Important Phrase</h2>
        <p id="importantPhrase">{this.state.importantPhrase.text}</p>
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
