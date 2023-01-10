import '../assets/css/index.css';

import Data from '../data/ModuleData.js';

const urlParams = new URLSearchParams(window.location.search);

function App({data}) {
  if (data === undefined) {
    return (
      <h1>
        Non existing module was called for.
      </h1>
    )
  }

  return (
    <div className="App">
      <h1>{ data.title }</h1>
      {data.elements.map( (a, b) => {
        return a
      })}
    </div>
  );
}

export default App;