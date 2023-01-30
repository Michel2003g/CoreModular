import React from 'react'

const SpecialText = ({type, children}) => {

  if (type === "link") {
    return (
      <a className="link" href={children} target="_blank">{children}</a>
    )
  }

  return (
    <span className={type}>{children}</span>
  )
}

export default SpecialText
