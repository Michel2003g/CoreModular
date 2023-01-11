import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from './pages/Home.js';
import Module from './pages/Module.js'; 

import NotFound404 from './pages/404.js'; 

import Data from './data/ModuleData.js';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<Home />} />
          {
            Object.keys(Data).map((k, i) => {
              return <Route key={i} path={"/" + k} element={<Module data={Data[k]}/>} />
            })
          }
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
