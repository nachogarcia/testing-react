import React from 'react'

const Phrase = ({important, value}) => {
  return (
    <div>
      <p className={getClassName()}>{value.text}</p>
    </div>
  )

  function getClassName () {
    let className = 'phrase'
    if (important) className += ' important'
    return className
  }
}

export default Phrase
