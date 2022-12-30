import React from 'react';
import MediaCard from '../components/cards/MediaCard';
import Hero from '../components/sections/Hero';
import Layout from '../global/Layout';

const Home = () => {
  const tags = [
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag6',
    'tag7',
    'tag8',
    'tag9',
    'tag10',
  ];
  const categories = ['Technology'];
  return (
    <Layout>
      <h1 className="text-blue-500">Home</h1>
      <Hero />
      <div className="px-6 max-w-screen-md flex flex-col items-center mx-auto sm:px-32">
        <MediaCard
          title="Hello world all powered by Shopify’s one-click checkout..."
          description="Add products to your Linkpop and turn your social bio into a social storefront—all powered by Shopify’s one-click checkout..."
          image="https://cdn.shopify.com/s/files/1/0070/7032/files/investing-in-your-business_683c66c6-35e9-46a0-a893-cb9b6b65a10d.jpg?v=1595381437&amp;width=1024"
          tags={tags}
          publishedDate="2021-09-01"
          categories={categories}
        />
        <MediaCard
          title="Hello world"
          description="Add products to your Linkpop and turn your social bio into a social storefront—all powered by Shopify’s one-click checkout..."
          image="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/hero-1-tablet-2x-604df177725e4b9aba5dc31e8c50a47a4937c540dcfed8a3c84868c94fb902fe.png"
        />
        <MediaCard
          title="Hello world"
          description="Add products to your Linkpop and turn your social bio into a social storefront—all powered by Shopify’s one-click checkout..."
          image="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/hero-1-tablet-2x-604df177725e4b9aba5dc31e8c50a47a4937c540dcfed8a3c84868c94fb902fe.png"
        />
        <MediaCard
          title="Hello world"
          description="Add products to your Linkpop and turn your social bio into a social storefront—all powered by Shopify’s one-click checkout..."
          image="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/hero-1-tablet-2x-604df177725e4b9aba5dc31e8c50a47a4937c540dcfed8a3c84868c94fb902fe.png"
        />
      </div>
    </Layout>
  );
};

Home.displayName = 'Home';
export default Home;
