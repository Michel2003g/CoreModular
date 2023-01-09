import LinkedButton from "./LinkedButton"

const ModuleCard = () => {
  return (
    <div className="module-card">
      <p className="title">Title</p>
      <p className="description">Module Description</p>
      <LinkedButton color="rgb(0, 204, 255)" text="Button"/>
    </div>
  )
}

export default ModuleCard
