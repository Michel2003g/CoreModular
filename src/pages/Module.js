import '../assets/css/Module.css';

import Data from '../data/ModuleData.js';

const urlParams = new URLSearchParams(window.location.search);

function App() {

  const id = urlParams.get("id");
  const Module = Data[id]

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
        return a
      })}
    </div>
  );
}

export default App;