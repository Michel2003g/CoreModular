const Section = ({title, items}) => {
  return (
    <div className="section">
        <h4 className="title">{title}</h4>
        {items}
    </div>
  )
}

export default Section
