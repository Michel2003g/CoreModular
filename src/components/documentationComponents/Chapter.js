const Chapter = ({title, children}) => {
  return (
    <div className="chapter" id={title}>
        <h2 className="title">{title}</h2>
        {children}
    </div>
  )
}

export default Chapter
