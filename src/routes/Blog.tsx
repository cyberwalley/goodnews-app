import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../global/Layout';

const Blog = () => {
  const { handle } = useParams<{ handle: string }>();
  return (
    <Layout>
      <h1 className='text-black'>Blog{handle}</h1>
    </Layout>
  );
};

Blog.displayName = 'Blog';

export default Blog;