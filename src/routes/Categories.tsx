import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../global/Layout';

const Categories = () => {
  const { handle } = useParams<{ handle: string }>();
  return (
    <Layout>
      <h1 className='text-black'>Categories: {handle} </h1>
    </Layout>
  );
};

Categories.displayName = 'Categories';

export default Categories;
