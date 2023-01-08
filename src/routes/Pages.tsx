import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../global/Layout';

const Pages = () => {
  const { handle } = useParams<{ handle: string }>();
  return (
    <Layout>
      <h1 className='text-black'>Pages{handle}</h1>
    </Layout>
  );
};

Pages.displayName = 'Pages';

export default Pages;
