import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import NumberPad from './components/NumberPad'
import NumberInput from './components/NumberInput'
import NumberClear from './components/NumberClear'

class App extends Component {
  constructor() {
    super()
    this.state = {
      numbers: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleInput(numbers) {
    this.setState({numbers})
  }

  handleClick(number) {
    this.setState({numbers: this.state.numbers + number})
  }

  handleClear() {
    this.setState({numbers: ''})
  }

  render () {
    return (
      <div>
        <NumberInput
          value={this.state.numbers}
          handleChange={this.handleInput}
        />
        <NumberPad
          handleOnClick={this.handleClick}
        />
        { this.state.numbers.length > 0 &&
          <NumberClear
            handleClear={this.handleClear}
          />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
