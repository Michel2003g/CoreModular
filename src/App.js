import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from './pages/Home.js';
import Module from './pages/Module.js'; 

import NotFound404 from './pages/404.js'; 

import Data from './data/ModuleData.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/CoreModular/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound404 />} />
          {
            Object.keys(Data).map((k, i) => {
              console.log(Data[k])
              return <Route path={"/CoreModular/Module/" + k} element={<Module data={Data[k]}/>} />
            })
          }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
