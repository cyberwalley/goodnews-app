import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Blog from './routes/Blog';
import Categories from './routes/Categories';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Pages from './routes/Pages';
import Products from './routes/Products';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:handle" element={<Products />} />
      <Route path="/categories/:handle" element={<Categories />} />
      <Route path="/pages/:handle" element={<Pages/>} />
      <Route path="/blog/:handle" element={<Blog/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
