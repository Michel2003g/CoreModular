const Chapter = ({title, sections}) => {
  return (
    <div className="chapter">
        <h2 className="title">{title}</h2>
        {sections.map( (section, i) => {
            return section
      })}
    </div>
  )
}

export default Chapter
