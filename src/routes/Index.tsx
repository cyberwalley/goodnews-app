import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Campaigns from './Campaigns';
import Categories from './Categories';
import Home from './Home';
import NotFound from './NotFound';
import Pages from './Pages';
import Products from './Products';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:handle" element={<Products />} />
      <Route path="/categories/:handle" element={<Categories />} />
      <Route path="/campaigns/:handle" element={<Campaigns />} />
      <Route path="/pages/:handle" element={<Pages />} />
      <Route path="/blog/:handle" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
