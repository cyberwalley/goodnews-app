import React from 'react';
import useContentful from '../api/useContentful';
import CategoryGrid from '../components/Category/CategoryGrid';
import Section from '../components/elements/Section';
import Layout from '../global/Layout';
import { useQuery } from '@tanstack/react-query';

const CategoryList = () => {
  const { getCategoryList } = useContentful();

  const { data: categories, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['Category List'],
    queryFn: getCategoryList,
  });
  console.log(categories, 'categories');
  return (
    <Layout>
      <header>
        <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            Categories
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Find Exclusive Discounts and Promotions from Top Retailers and
            Brands at Our One-Stop Destination for Savings
          </p>
        </div>
      </header>
      <Section>
        <CategoryGrid categories={categories} loading={isCategoryLoading} />
      </Section>
    </Layout>
  );
};

CategoryList.displayName = 'CategoryList';

export default CategoryList;
