import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from './pages/Home.js';
import Module from './pages/Module.js'; 

import NotFound404 from './pages/404.js'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/CoreModular/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/CoreModular/Module/" element={<Module />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;