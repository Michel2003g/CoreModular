import React from 'react'

const SpecialText = ({type, content}) => {

  if (type === "link") {
    return (
      <a className="link" href={content}>{content}</a>
    )
  }

  return (
    <span className={type}>{content}</span>
  )
}

export default SpecialText
