import React, {Component} from 'react'

import NumberPad from './components/NumberPad'
import NumberInput from './components/NumberInput'
import NumberClear from './components/NumberClear'
import Phonewords from './components/Phonewords'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      numbers: '',
      phonewords: [],
      error: false,
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
      phonewords: [],
    })
  }

  async fetchPhonewords () {
    try {
      const response = await fetch(`/api/phonewords?numbers=${this.state.numbers}`)
      const phonewords = await response.json()
      this.setState({phonewords})
    } catch(e) {
      this.setState({error: true})
    }
  }

  render () {
    if (this.state.error) return <div><h2>Seems there was an error!</h2></div>

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
