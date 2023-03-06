/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';
import Layout from '../global/Layout';
import MetaTags from '../global/MetaTags';
import { SITE_NAME, SITE_TWITTER_URL } from '../libs/constants';
import { useQuery } from '@tanstack/react-query';
import useContentful from '../api/useContentful';
import NotFound from './NotFound';
import { marked } from 'marked';
import Border from '../components/elements/Border';
import NativeAds from '../libs/NativeAds';
import { handleize } from '../libs/utils';
import Spinner from '../components/elements/Spinner';

const Products = () => {
  const location = useLocation();
  const { handle } = useParams<{ handle: string }>();

  const slug = handle || location.state.slug;
  const { getProduct } = useContentful();

  type productGriptType = { [key: string]: string };
  const { data, isLoading } = useQuery<productGriptType[] | undefined>({
    queryKey: ['single-product', slug],
    queryFn: () => getProduct(slug),
  });

  //@ts-ignore
  const product = data?.[0];

  if (data?.length === 0) return <NotFound />;

  if (isLoading) {
    return (
      <div className="text-black text-center mx-auto mt-[20vh] mb-0 h-[100vh]">
        <Spinner />
      </div>
    );
  }

  /* @ts-ignore */
  const markedDescription = marked(product?.description);
  /* @ts-ignore */
  const handledCategory = handleize(product?.category);
  console.log(handledCategory, 'handledCategory');
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
        canonical={`/products/${slug}`}
      />
      <div className="pt-16 p-4 md:p-8">
        <div className="bg-white border-black border-2 shadow-3xl">
          <div className="pt-10 pb-10">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <div className="flex items-center">
                    <Link
                      to={'/'}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      Home
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
                <li>
                  <div className="flex items-center">
                    <Link
                      to={`/categories/${handledCategory}`}
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
                  loading="lazy"
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
                    affiliate commission.
                  </p>
                </div>
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <div
                        className="text-base text-gray-900"
                        dangerouslySetInnerHTML={{ __html: markedDescription }}
                      />
                    </div>
                  </div>
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
        <Border>
          <div className="px-10 py-10">
            <div className="text-black text-2xl"> You may also like these</div>
            <NativeAds category={product?.category} />
          </div>
        </Border>
      </div>
    </Layout>
  );
};

Products.displayName = 'Products';

export default Products;
