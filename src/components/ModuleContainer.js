import ModuleCard from "./ModuleCard";
import Data from '../data/ModuleData.js';

const ModuleContrainer = () => {
  return (
    <div className="module-container">
      {
        Object.keys(Data).map((k, i) => {
          const data = Data[k]
          return <ModuleCard title={data.title} description={data.description} link={k}/>
        })
      }
    </div>
  )
}

export default ModuleContrainer
