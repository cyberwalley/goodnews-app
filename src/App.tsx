import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
