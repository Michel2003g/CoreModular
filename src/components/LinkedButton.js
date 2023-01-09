const LinkedButton = ({link, text, color}) => {
  return (
    <a className="button" href={link} style={{backgroundColor: color}}>{text}</a>
  )
}

LinkedButton.defaultProps = {
    link: "",
    text: "NoTextGiven",
    color: "rgb(0, 0, 0)"
}

export default LinkedButton
