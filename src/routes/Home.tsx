import React from 'react';
import MediaCard from '../components/cards/MediaCard';
import Heading from '../components/elements/Heading';
import useContentful from '../api/useContentful';
import Campaign from '../components/sections/Campaign';
import Hero from '../components/sections/Hero';
import Layout from '../global/Layout';
import LogoImage from '../global/LogoImage';
import MetaTags from '../global/MetaTags';
import { useQuery } from '@tanstack/react-query';
//import { getProducts } from '../api/products';
import FeaturedCategory from '../components/sections/FeaturedCategory';
import LoadingProduct from '../components/elements/LoadingProduct';
import { SITE_NAME } from '../libs/constants';
import SignUp from '../components/sections/SignUp';
import BlogSection from '../components/sections/BlogSections/BlogSection';
import Accordion from '../components/sections/Accordion';
//import { getProducts } from '../../functions/contentful/getProducts';
///require('dotenv').config();

const Home = () => {
  const { getProducts, getCampaigns } = useContentful();

  const { data: products, isLoading: isProductLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  console.log(products, 'homepage');

  const { data: campaigns, isLoading: isCampaignLoading } = useQuery({
    queryKey: ['campaigns'],
    queryFn: getCampaigns,
  });

  //console.log(campaigns, 'campaigns')
  return (
    <Layout>
      <MetaTags
        title={`${SITE_NAME} | Get the Best Online Deals, Offers, Coupons and Shopping Tips`}
        description="Find Exclusive Discounts and Promotions from Top Retailers and Brands at Our One-Stop Destination for Savings"
        canonical={'/'}
      />
      <Hero />
      {/* <SignUp /> */}
      {/* <LogoImage title="Offers from your preferred Brands" /> */}
      {/*    <Heading> Offers from your preferred Brands</Heading>
      <LogoImage /> */}

      <BlogSection />

      <Campaign
        heading="Trending deals"
        campaign={campaigns}
        loading={isCampaignLoading}
      />
      <FeaturedCategory
        heading="All deals"
        products={products}
        loading={isProductLoading}
      />
      {/*
      <div className="px-6 sm:px-32 max-w-[1200px] grid md:grid-cols-2 gap-6 grid-cols-1 m-auto mt-6">
        <MediaCard
          title="Hello world all powered by Shopify’s one-click checkout..."
          description="Add products to your Linkpop and turn your social bio into a social storefront—all powered by Shopify’s one-click checkout..."
          image="https://cdn.shopify.com/s/files/1/0070/7032/files/investing-in-your-business_683c66c6-35e9-46a0-a893-cb9b6b65a10d.jpg?v=1595381437&amp;width=1024"
          publishedDate="2021-09-01"
          tag={tags}
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
      </div> */}
     {/*  <Accordion /> */}
    </Layout>
  );
};

Home.displayName = 'Home';
export default Home;
