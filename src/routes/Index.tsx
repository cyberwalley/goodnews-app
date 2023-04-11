import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Campaigns from './Campaigns';
import Categories from './Categories';
import CategoryList from './CategoryList';
import Home from './Home';
import NotFound from './NotFound';
import Pages from './Pages';
import ProductList from './ProductList';
import Products from './Products';
import BlogPost from './BlogPost';
import Blog from './Blog';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:handle" element={<Products />} />
      <Route
        path="categories/:handle/products/:handle"
        element={<Products />}
      />
      <Route path="/categories/:handle" element={<Categories />} />
      <Route path="/campaigns/:handle" element={<Campaigns />} />
      <Route
        path="/campaigns/:handle/products/:handle"
        element={<Products />}
      />
      <Route path="/pages/:handle" element={<Pages />} />
      <Route path="/buying-guides" element={<Blog />} />
      <Route path="/buying-guides/:handle" element={<Blog />} />
      <Route path="/buying-guides/:handle/:handle" element={<BlogPost />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/products" element={<CategoryList />} />
      <Route path="/products/all" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
