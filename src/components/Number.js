import React, {PureComponent} from 'react'

export default function Number({number, letters, handleOnClick, highlight}) {
  let textClass = 'numberpad__number__text'
  if (highlight) textClass = `${textClass} numberpad__number__text--highlight`

  return (
    <div onClick={handleOnClick} className="numberpad__number">
      <span className={textClass}>{number}</span>
      <span className="numberpad__number__letters">{letters}</span>
    </div>
  )
}
