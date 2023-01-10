import '../assets/css/Module.css';

function App({data}) {
  if (data === undefined) {
    return (
      <h1>
        Non existing module was called for.
      </h1>
    )
  }

  return (
    <div className="Module">
      <h1>{ data.title }</h1>
      {data.elements.map( (a, b) => {
        return a
      })}
    </div>
  );
}

export default App;