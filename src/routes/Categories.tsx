import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';

import Section from '../components/elements/Section';
import Layout from '../global/Layout';
import { useQuery } from '@tanstack/react-query';
import { capitalize } from '../libs/utils';
import ProductGrid from '../components/Product/ProductGrid';
import NotFound from './NotFound';
import { marked } from 'marked';
import Spinner from '../components/elements/Spinner';
import MetaTags from '../global/MetaTags';

const Categories = () => {
  const { handle } = useParams<{ handle: string }>();
  const location = useLocation();
  const { getProductsByCategory, getCategory } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug).replace(/-/g, ' ');

  console.log(capitalizedSlug, 'real -capitalizedSlug');

  const { data, isLoading } = useQuery({
    queryKey: ['Category List', capitalizedSlug],
    queryFn: () => getProductsByCategory(capitalizedSlug),
  });

  const { data: category, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['Category description', slug],
    queryFn: () => getCategory(slug),
  });

  console.log(category, 'New category');

  if (isCategoryLoading)
    return (
      <div className="text-black text-center mx-auto mt-[20vh] mb-0 h-[100vh]">
        <Spinner />
      </div>
    );

  if (!category || category?.length === 0) return <NotFound />;

  const markedDescription = marked.parse(category?.[0].description || null);

  return (
    <Layout>
      <MetaTags
        title={`${capitalizedSlug} - Getdailyoffers.com`}
        description={category?.[0]?.caption}
        canonical={`/categories/${slug}`}
      />
      <header>
        <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            {capitalizedSlug}
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            {category?.[0]?.caption}
          </h2>
        </div>
      </header>
      <Section>
        <ProductGrid collection={data} loading={isLoading} />
      </Section>
      <Section>
        <div className="bg-white border-2 shadow-3xl border-black text-black mt-20">
          <div
            className="py-[2rem] px-[2rem] text-sm"
            dangerouslySetInnerHTML={{ __html: markedDescription }}
          />
        </div>
      </Section>
    </Layout>
  );
};

Categories.displayName = 'Categories';

export default Categories;
