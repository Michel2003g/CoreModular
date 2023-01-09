import { useParams } from 'react-router-dom';
import '../assets/css/index.css';

import Data from '../data/ModuleData.js';

function App() {

  const { id } = useParams();

  const Module = Data[id];

  if (Module === undefined) {
    return (
      <h1>
        Non existing module was called for.
      </h1>
    )
  }

  return (
    <div className="App">
      <h1>{ Module.title }</h1>
      {Module.elements.map( (a, b) => {
        return <h1>{a}, {b}</h1>
      })}
    </div>
  );
}

export default App;