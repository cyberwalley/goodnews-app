/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { FC, useEffect, useState } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';
import Layout from '../global/Layout';

import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import Button from '../components/elements/Button';
import MetaTags from '../global/MetaTags';
import { SITE_NAME, SITE_TWITTER_URL } from '../libs/constants';
import { getProduct, getProducts } from '../api/products';
import { useQuery } from '@tanstack/react-query';
import useContentful from '../api/useContentful';

const Products = () => {
  const location = useLocation();
  const { handle } = useParams<{ handle: string }>();

  /* const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['products on product page'],
    queryFn: getProducts,
  });
(slug)
  const productz =
    data && data[0].filter((product: any) => (product.title = 'product1'));
  console.log(productz, 'product');
  const { title, price, description, image, id } = productz[0]; */
  /* const currentHandle = handle || location.pathname;

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['products on product page', currentHandle.replace(/-/g, ' ')],
    queryFn: getProduct,
  }); */

  const slug = handle || location.state.slug;
  const { getProduct } = useContentful();

  //const [product, setProduct] = useState();
  type productGriptType = { [key: string]: string };
  const { data, isLoading, isSuccess } = useQuery<
    productGriptType[] | undefined
  >({
    queryKey: ['single-product', slug],
    queryFn: () => getProduct(slug),
  });

  //@ts-ignore
  console.log(data?.[0]);
  //@ts-ignore
  const product = data?.[0];

  return (
    <Layout>
      <MetaTags
        /* @ts-ignore */
        title={`${product?.name} - ${SITE_NAME}`}
        /* @ts-ignore */
        description={product?.description}
        schemaVariant="product"
        /* @ts-ignore */
        image={product?.image1}
        /* @ts-ignore */
        brand={product?.brand}
        /* @ts-ignore */
        price={product?.price}
        validUntil="2023-12-31"
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
                <li>
                  <div className="flex items-center">
                    <a
                      href={'/'}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {'Home'}
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
                <li>
                  <div className="flex items-center">
                    <Link
                      to={`/categories/${product?.category}`}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {product?.category}
                    </Link>
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
                <li className="text-sm">
                  <a
                    href={product?.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {/* @ts-ignore */}
                    {product?.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <img
                  /*  @ts-ignore  */
                  src={product?.image1}
                  /*  @ts-ignore  */
                  alt={product?.name}
                  /*  @ts-ignore  */
                  title={product?.name}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="lg:pr-8 p-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4 mt-4">
                  {/* @ts-ignore */}
                  {product?.name}
                </h1>
                <p className="text-3xl tracking-tight text-gray-900">
                  {/* @ts-ignore */}
                  {product?.price}
                </p>
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {/* @ts-ignore */}
                        {product?.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[40px]">
                  {/* @ts-ignore */}
                  <a
                    href={`${product?.referralUrl}`}
                    type="button"
                    className="py-3 px-8 text-base w-full items-center justify-center text-center md:px-4  bg-rose-300 transition shadow-5px hover:shadow-none  inline-block whitespace-nowrap border-black text-black border-2 font-bold hover:bg-rose-400"
                  >
                    Get offer
                  </a>
                  {/*  <Button
                    variant="secondary"
                    width="full"
                    onClick={LinkToReferral}
                  >
                    Get offer
                  </Button> */}
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
