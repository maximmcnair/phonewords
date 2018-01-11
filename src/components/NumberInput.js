import React, {PureComponent} from 'react'

export default function NumberInput({value, handleChange}) {
  return (
    <input
      type="tel"
      name="number"
      className="numberinput"
      value={value}
      onChange={(event) => {
        handleChange(event.target.value)
      }}
    />
  )
}
