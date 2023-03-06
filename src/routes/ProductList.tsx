import React from 'react';
import Section from '../components/elements/Section';
import ProductGrid from '../components/Product/ProductGrid';
import Layout from '../global/Layout';
import { useQuery } from '@tanstack/react-query';
import useContentful from '../api/useContentful';
import NotFound from './NotFound';
import Spinner from '../components/elements/Spinner';

const ProductList = () => {
  const { getProducts } = useContentful();
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div className="text-black text-center mx-auto mt-[20vh] mb-0 h-[100vh]">
        <Spinner />
      </div>
    );
  }

  if (!data || data?.length === 0) return <NotFound />;
  return (
    <Layout>
      <header>
        <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            All products
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Find Exclusive Discounts and Promotions from Top Retailers and
            Brands at Our One-Stop Destination for Savings
          </p>
        </div>
      </header>
      <Section>
        <ProductGrid collection={data} loading={isLoading} />
      </Section>
    </Layout>
  );
};

ProductList.displayName = 'ProductList';

export default ProductList;
