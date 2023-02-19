/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { FC, useEffect, useState } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';
import Layout from '../global/Layout';

import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import Button from '../components/elements/Button';
import MetaTags from '../global/MetaTags';
import { SITE_TWITTER_URL } from '../libs/constants';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
/* const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
} */
/* 
let vendorTable = base.getTable("Vendors");
let query = await vendorTable.selectRecordsAsync()

let exampleValue = query.records[0].getCellValue("Quoted Parts")
console.log(exampleValue) */

const Products = () => {
  const { handle } = useParams<{ handle: string }>();
  //const { title } = products;

  //const location = useLocation();
  //const { id, title } = location.state;

  //const [products, setProducts] = useState(product);
  //console.log(location.state, title, id, 'location.state');

  /*  const [productss, setProductss] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await fetch(`/api/products`);
      const products = await res.json();
      if (products) {
        setProductss(products);
      }
      console.log(productss, 'single product');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
 */
  /*  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetch(`/api/single-product?id=${id}`);
      const products = await res.json();
      if (products) {
        setProducts(products);
      }
      console.log(products, 'single product');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []); */

  /* var Airtable = require('airtable');
  var base = new Airtable({
    apiKey:
      'patnbhqWq2NCxewM8.1567c84c1d9e1854ad31f96fc3a557d0bf1359cde295a63bcacf32459e398d6c',
  }).base('appcIC8f0Eb96WxcK');

  base('Products').find(
    'recDKuY9tACtJvriI',
    function (err: any, record: { id: any }) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Retrieved', { ...record });
    },
  );  */

  /*  var Airtable = require('airtable');
  var base = new Airtable({
    apiKey:
      'patnbhqWq2NCxewM8.1567c84c1d9e1854ad31f96fc3a557d0bf1359cde295a63bcacf32459e398d6c',
  }).base('appcIC8f0Eb96WxcK'); */

  //const table = base.getTable('Products');
  /* const query = base('Products').selectRecordsAsync({ fields: ['title'] });
  const match = query.records.find(
    (rec: { name: string | undefined }) => rec.name === handle,
  );

  if (match) {
    console.log(match);
  } */

  /* base('Products').find(
    'recDKuY9tACtJvriI',
    function (err: any, record: { id: any }) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Retrieved', { ...record });
    },
  ); */

  /*  const table = base('Products').find(
    'Lefant Robot Vacuums and Mop, 2000Pa Smart Vacuum Robot, 100mins Runtime, WiFi/App/Alexa Control, Anti-Collision/Drop Sensor, 11*11*2.9 Inch , 4 Cleaning Modes Ideal for Pet Hair, Hard Floor (M210B)',
    function (err: any, record: { fields: [] }) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Retrieved', { ...record });
    },
  );
  console.log(table, 'table'); */
  /* const query = table.selectRecordsAsync({ fields: ['title'] });
  console.log(query, 'query');
 */

  /*  const loadProducts = async () => {
    try {
      const res = await fetch(`/api/single-product`);
      const products = await res.json();
      if (products) {
        setProducts(products);
      }
      console.log(products, 'single product');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []); */

  /*  const [filterdProducts, setFilterdProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const products = await res.json();
      if (products) {
        const hello = filterdProducts.filter(
          (product: any) => product.title === 'product1',
        );
        setFilterdProducts(hello);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []); */

  /* const hello = filterdProducts.filter(
    (product: any) => product.title === 'product1',
  ); */

  return (
    <Layout>
      <MetaTags
        title={`${handle} - Getdailyoffers.com`}
        description={'heyyyy'}
        schemaVariant="product"
        image="https://getdailyoffers.com/images/og-image.png"
        brand="gucci"
        price="6.90"
        validUntil="2021-12-31"
      />
      <div className="pt-16 p-4 md:p-8">
        <div className="bg-white border-black border-2 shadow-3xl">
          <div className="pt-10 pb-10">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                {/* products?.breadcrumbs?.map(breadcrumb => (
                    <li key={breadcrumb.id}>
                      <div className="flex items-center">
                        <a
                          href={breadcrumb.href}
                          className="mr-2 text-sm font-medium text-gray-900"
                        >
                          {breadcrumb.name}
                        </a>
                        <svg
                          width={16}
                          height={20}
                          viewBox="0 0 16 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="h-5 w-4 text-gray-300"
                        >
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                      </div>
                    </li>
                  )) */}
                <li className="text-sm">
                  <a
                    href={product.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <img
                  src={product.images[3].src}
                  alt={product.images[3].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="lg:pr-8 p-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4 mt-4">
                  {handle}
                </h1>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <Button
                    variant="secondary"
                    width="full"
                    onClick={() => console.log('Get offer')}
                  >
                    Get offer
                  </Button>
                </div>
                <div className="text-gray-500 mt-2 text-sm text-center">
                  <p>
                    When you buy through links on our site, we may earn an
                    affilate commission.
                  </p>
                </div>
                <div className="flex flex-row gap-x-4 md:gap-x-6 justify-center mt-10">
                  <Link
                    to={SITE_TWITTER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-3 bg-gray-200 rounded-full"
                  >
                    <img
                      className="h-3 w-3 md:h-auto md:w-auto"
                      src="https://cdn.shopify.com/shopifycloud/linkpop/assets/twitter-icon.bcc917da.svg"
                      alt="Twitter"
                      loading="lazy"
                      width="18"
                      height="18"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Products.displayName = 'Products';

export default Products;
