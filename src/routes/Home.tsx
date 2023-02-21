import React, { useEffect, useState } from 'react';
import MediaCard from '../components/cards/MediaCard';
import Heading from '../components/elements/Heading';
import useContentful from '../api/useContentful';
import Campaign from '../components/sections/Campaign';
import Hero from '../components/sections/Hero';
import Layout from '../global/Layout';
import LogoImage from '../global/LogoImage';
import MetaTags from '../global/MetaTags';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';
import FeaturedCategory from '../components/sections/FeaturedCategory';
import { time } from 'console';

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
  //const categories = ['Technology'];

  /* const categories = [
    'Technology',
    'Fashion',
    'Electronics',
    'Home & Garden',
    'Sports',
    'Toys',
    'Beauty',
    'Health',
    'Automotive',
    'Baby',
    'Grocery',
    'Pets',
    'Books',
    'Music',
    'Movies',
    'Games',
    'Outdoors',
    'Industrial',
    'Office',
    'Arts',
    'Crafts',
  ];
 */
  /* const categories = [
    {
      id: 1,
      categoryTitle: 'Electronics',
      products: [
        {
          id: 1,
          productTitle: 'Product 1',
          price: 100,
          seller: 'Seller 1',
          publishedDate: '2021-09-01',
        },
        {
          id: 2,
          productTitle: 'Product 2',
          price: 200,
          seller: 'Seller 2',
          publishedDate: '2021-09-02',
        },
        {
          id: 3,
          productTitle: 'Product 3',
          price: 300,
          seller: 'Seller 3',
          publishedDate: '2021-09-03',
        },
      ]
    },
    {
      id: 2,
      categoryTitle: 'Technology',
      products: [
        {
          id: 1,
          productTitle: 'Product 1',
          price: 100,
          seller: 'Seller 1',
          publishedDate: '2021-09-01',
        },
        {
          id: 2,
          productTitle: 'Product 2',
          price: 200,
          seller: 'Seller 2',
          publishedDate: '2021-09-02',
        },
        {
          id: 3,
          productTitle: 'Product 3',
          price: 300,
          seller: 'Seller 3',
          publishedDate: '2021-09-03',
        },
      ]
    }
  ] */

  const categories = [
    {
      id: 1,
      categoryTitle: 'Electronics',
      productTitle:
        'Up to 60% ... off Handbags From Coach, Michael Kors and More off Michael Kors and More off Michael Kors and More off',
      price: 100,
      seller: 'Amazon',
      publishedDate: '2021-09-01',
      label: 'New',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 2,
      categoryTitle: 'Electronics',
      productTitle: 'Product 2',
      price: 200,
      seller: 'Konga',
      publishedDate: '2021-09-02',
      label: 'New',
      productImage:
        'https://images-na.ssl-images-amazon.com/images/I/41+rTMSKgqL._AC_SX368_.jpg',
    },
    {
      id: 3,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 4,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 5,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 6,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 7,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 8,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
  ];

  const campaign = [
    {
      id: '1',
      brand: 'Apple',
      date: '2021-09-01',
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt:
        'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      id: '1',
      brand: 'Apple',
      date: '2021-09-01',
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt:
        'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      id: '1',
      brand: 'Apple',
      date: '2021-09-01',
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ];

  /* const products = [
    {
      id: 1,
      categoryTitle: 'Electronics',
      productTitle:
        'Up to 60% ... off Handbags From Coach, Michael Kors and More off Michael Kors and More off Michael Kors and More off',
      price: 100,
      seller: 'Amazon',
      publishedDate: '2021-09-01',
      label: 'New',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 2,
      categoryTitle: 'Electronics',
      productTitle: 'Product 2',
      price: 200,
      seller: 'Konga',
      publishedDate: '2021-09-02',
      label: 'New',
      productImage:
        'https://images-na.ssl-images-amazon.com/images/I/41+rTMSKgqL._AC_SX368_.jpg',
    },
    {
      id: 3,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 4,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 5,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 6,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 7,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 8,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
  ]; */

  /* const loadProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const products = await res.json();
      if (products) {
        setProducts(products);
        console.log(products, 'home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
 */
  /*  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  console.log(data, 'home - data'); */

  const [products, setProducts] = useState<string[] | undefined>([]);
  const { getProducts } = useContentful();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  console.log(data, 'homepage');

  return (
    <Layout>
      <MetaTags
        title="Getdailyoffers.com"
        description="Find Exclusive Discounts and Promotions from Top Retailers and Brands at Our One-Stop Destination for Savings"
      />
      <Hero />
      {/* <Heading> Offers from your preferred Brands</Heading>
      <LogoImage /> */}
      <Campaign heading="Trending deals" campaign={campaign} />
      <FeaturedCategory
        heading="All deals"
        products={data}
        loading={isLoading}
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
    </Layout>
  );
};

Home.displayName = 'Home';
export default Home;
