import React, { Component } from 'react'
import 'App.css'
import phraseService from 'services/Phrase'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chuck Norris Phrases</h1>
        </div>
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
