import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';
import Layout from '../global/Layout';
import MetaTags from '../global/MetaTags';
import { capitalize } from '../libs/utils';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/elements/Spinner';
import NotFound from './NotFound';
import BlogPostCard from '../components/cards/BlogPostCard';
import Grid from '../components/elements/Grid';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const Blog = () => {
  const location = useLocation();
  const { handle } = useParams<{ handle: string }>();
  const { getBlogPostsByCategory } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug).replace(/-/g, ' ');

  const { data: posts, isLoading } = useQuery({
    queryKey: ['Blog posts by:', capitalizedSlug],
    queryFn: () => getBlogPostsByCategory(capitalizedSlug),
  });

  if (!posts || isLoading)
    return (
      <div className="text-black text-center mx-auto mt-[20vh] mb-0 h-[100vh]">
        <Spinner />
      </div>
    );

  if (!posts || posts?.length === 0) return <NotFound />;

  console.log(posts, 'all blog posts');

  return (
    <Layout>
      <MetaTags
        title={`${capitalizedSlug} - Getdailyoffers.com`}
        description={'Get the best deals on the internet'}
        canonical={window.location.href}
      />
      <header>
        <div className="mx-auto max-w-3xl pt-10 pb-20 px-6 lg:px-8">
          {/* <nav aria-label="Breadcrumb">
            <ol
              itemScope
              itemType="https://schema.org/BreadcrumbList"
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-[10px]"
            >
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="flex items-center">
                  <Link
                    to="/"
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
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="flex items-center">
                  <Link
                    to={`/${handledRootCategory}/${handledMainCategory}`}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {post?.category}
                  </Link>
                </div>
              </li>
            </ol>
          </nav> */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            {capitalizedSlug}
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Learn our to stretch your money. We do the hard work to get you the
            infomation you need to get the best online deals
          </h2>
        </div>
      </header>
      <div className="bg-white border-2 shadow-3xl border-black text-black">
        <div className="bg-white py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Grid layout="blog">
              {posts.map(
                ({
                  id,
                  datePosted,
                  title,
                  category,
                  content,
                  imageUrl,
                  slug,
                }) => (
                  <BlogPostCard
                    key={id}
                    id={id}
                    datePosted={datePosted}
                    title={title}
                    category={category}
                    content={content}
                    imageUrl={imageUrl}
                    slug={slug}
                    isLoading={isLoading}
                  />
                ),
              )}
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Blog.displayName = 'Blog';

export default Blog;
