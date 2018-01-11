import React from 'react'
import ReactDOM from 'react-dom'

import NumberPad from './components/NumberPad'

const App = () => {
  return (
    <div>
      <NumberPad />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
