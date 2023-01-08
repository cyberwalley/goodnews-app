import React from 'react';

import { useParams } from 'react-router-dom';
import Layout from '../global/Layout';

const Products = () => {
  const { handle } = useParams<{ handle: string }>();
  return (
    <Layout>
      <h1 className='text-black'>Product {handle}</h1>
    </Layout>
  );
};

Products.displayName = 'Products';

export default Products;
