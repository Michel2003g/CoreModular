import LinkedButton from "./LinkedButton"

const ModuleCard = ({title, description, link}) => {
  return (
    <div className="module-card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <LinkedButton color="rgb(0, 204, 255)" text="Documentation" link={"/CoreModular/Module/" + link}/>
    </div>
  )
}

ModuleCard.defaultProps = {
  title: "<Title>",
  description: "Module Description",
  link: "null"
}

export default ModuleCard
