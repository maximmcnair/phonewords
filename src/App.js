import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import NumberPad from './components/NumberPad'
import NumberInput from './components/NumberInput'

class App extends Component {
  constructor() {
    super()
    this.state = {
      numbers: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleNumberClick = this.handleNumberClick.bind(this)
  }

  handleInputChange(numbers) {
    this.setState({numbers})
  }

  handleNumberClick(number) {
    this.setState({numbers: this.state.numbers + number})
  }

  render () {
    return (
      <div>
        <NumberInput
          value={this.state.numbers}
          handleChange={this.handleInputChange}
        />
        <NumberPad
          handleOnClick={this.handleNumberClick}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
