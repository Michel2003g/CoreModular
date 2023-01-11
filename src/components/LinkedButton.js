import { HashRouter, Route, Link } from "react-router-dom";

const LinkedButton = ({link, text, color}) => {
  return (
    <Link className="button" to={link} style={{backgroundColor: color}}>{text}</Link>
  )
}

LinkedButton.defaultProps = {
    link: "",
    text: "NoTextGiven",
    color: "rgb(0, 0, 0)"
}

export default LinkedButton
