import React, {PureComponent} from 'react'

import Number from './Number'

export default class NumberPad extends PureComponent {
  render() {
    const numbers = ['1','2','3','4','5','6','7','8','9','*','0','#']
    const {handleOnClick} = this.props

    return (
      <div className="numberpad">
        {numbers.map(num => (
          <Number
            key={num}
            number={num}
            handleOnClick={() => {handleOnClick(num)}}
            highlight={num === '*' || num === '#'}
          />
        ))}
      </div>
    )
  }
}
