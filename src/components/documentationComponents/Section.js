const Section = ({title, children}) => {
  return (
    <div className="section" id={title}>
        <h4 className="title">{title}</h4>
        {children}
    </div>
  )
}

export default Section
