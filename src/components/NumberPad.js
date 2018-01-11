import React, {PureComponent} from 'react'

import Number from './Number'

export default class NumberPad extends PureComponent {
  render() {
    const numbers = [
      { number: '1', letters: ' '},
      { number: '2', letters: 'abc'},
      { number: '3', letters: 'def'},
      { number: '4', letters: 'ghi'},
      { number: '5', letters: 'jkl'},
      { number: '6', letters: 'mno'},
      { number: '7', letters: 'pqrs'},
      { number: '8', letters: 'tuv'},
      { number: '9', letters: 'wxyz'},
      { number: '*', letters: ''},
      { number: '0', letters: ''},
      { number: '#', letters: ''}
    ]
    const {handleOnClick} = this.props

    return (
      <div className="numberpad">
        {numbers.map(num => (
          <Number
            key={num.number}
            number={num.number}
            letters={num.letters}
            handleOnClick={() => {handleOnClick(num.number)}}
            highlight={num.number === '*' || num.number === '#'}
          />
        ))}
      </div>
    )
  }
}
