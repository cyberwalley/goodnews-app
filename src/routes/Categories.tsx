import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';

import Section from '../components/elements/Section';
import Layout from '../global/Layout';
import { useQuery } from '@tanstack/react-query';
import { capitalize } from '../libs/utils';
import ProductGrid from '../components/Product/ProductGrid';
import NotFound from './NotFound';

const Categories = () => {
  const { handle } = useParams<{ handle: string }>();
  const location = useLocation();
  const { getProductsByCategory, getCategory } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug);

  type productGriptType = { [key: string]: string };

  const { data, isLoading } = useQuery({
    queryKey: ['Category List', capitalizedSlug],
    queryFn: () => getProductsByCategory(capitalizedSlug),
  });

  const { data: category } = useQuery<productGriptType[] | undefined>({
    queryKey: ['Category description', slug],
    queryFn: () => getCategory(slug),
  });

  if (data?.length === 0) return <NotFound />;

  return (
    <Layout>
      <header>
        <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            {capitalizedSlug}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            {category?.[0].description}
          </p>
        </div>
      </header>
      <Section>
        <ProductGrid collection={data} loading={isLoading} />
      </Section>
    </Layout>
  );
};

Categories.displayName = 'Categories';

export default Categories;
