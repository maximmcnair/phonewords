import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import NumberPad from './components/NumberPad'
import NumberInput from './components/NumberInput'
import NumberClear from './components/NumberClear'
import Phonewords from './components/Phonewords'

class App extends Component {
  constructor() {
    super()
    this.state = {
      numbers: '',
      phonewords: [],
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.fetchPhonewords = this.fetchPhonewords.bind(this)
  }

  handleInput(numbers) {
    this.setState(
      {numbers},
      this.fetchPhonewords
    )
  }

  handleClick(number) {
    this.setState(
      {numbers: this.state.numbers + number},
      this.fetchPhonewords
    )
  }

  handleClear() {
    this.setState({
      numbers: '',
      phonewords: []
    })
  }

  async fetchPhonewords () {
    try {
      const response = await fetch(`/api/phonewords?numbers=${this.state.numbers}`)
      const phonewords = await response.json()
      console.log(phonewords.length, phonewords)
      this.setState({phonewords})
    } catch(e) {
      console.warn('Error occured ' + e)
      // TODO this.setState({error: true})
    }
  }

  render () {
    return (
      <div className="wrapper">
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
        <Phonewords phonewords={this.state.phonewords} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
