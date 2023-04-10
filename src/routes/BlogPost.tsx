import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ContentArea from '../global/ContentArea';
import Layout from '../global/Layout';
import MetaTags from '../global/MetaTags';
import { SITE_NAME, SITE_TWITTER_URL } from '../libs/constants';
import { marked } from 'marked';
import Section from '../components/elements/Section';
import SocialMediaShare from '../global/SocialMediaShare';
import useContentful from '../api/useContentful';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/elements/Spinner';
import { cropText, formatDateTime, handleize } from '../libs/utils';
import NotFound from './NotFound';
import { DiscussionEmbed } from 'disqus-react';

/* const post = [
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
      name: 'Michael Forester',
      role: 'Content Creator',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]; */

const BlogPost = () => {
  const location = useLocation();
  const { handle } = useParams<{ handle: string }>();

  const slug = handle || location.state.slug;
  const { getBlogPost } = useContentful();

  type productGriptType = { [key: string]: string };
  //console.log(slug, 'red');
  const { data, isLoading } = useQuery<productGriptType[] | undefined>({
    queryKey: ['single-post', slug],
    queryFn: () => getBlogPost(slug),
  });
  /* console.log(data, 'yellow1');
  console.log(data?.[0], 'yellow'); */
  const post = data?.[0];

  if (data?.length === 0) return <NotFound />;

  if (isLoading) {
    return (
      <div className="text-black text-center mx-auto mt-[20vh] mb-0 h-[100vh]">
        <Spinner />
      </div>
    );
  }

  /* @ts-ignore */
  const markedContent = marked(post?.content);

  /* @ts-ignore */
  const handledRootCategory = handleize(post?.rootCategory);

  /* @ts-ignore */
  const handledMainCategory = handleize(post?.category);

  /* @ts-ignore */
  const handledSubCategory = handleize(post?.subCategory);

  return (
    <Layout>
      <MetaTags
        title={`${post?.title} | ${SITE_NAME}`}
        /* @ts-ignore */
        description={cropText(post?.metaDescription, 167)}
        canonical={`/${handledSubCategory}/${handledMainCategory}/${handle}`}
      />
      <div className="pt-16 p-4 md:p-8">
        <div className="bg-white border-black border-2 shadow-3xl">
          <div className="pt-10 pb-10">
            <article>
              <nav aria-label="Breadcrumb">
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
                        to={`/${handledRootCategory}/${handledSubCategory}`}
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        {post?.subCategory}
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="border-b-2">
                <header className="mx-auto mt-6 max-w-2xl sm:px-6 px-6 lg:max-w-7xl lg:px-8 mb-4">
                  <h1
                    className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4 mt-4"
                    itemProp="headline"
                  >
                    {post?.title}
                  </h1>
                  <div className="lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 grid gap-y-8">
                    <div>
                      <div className="relative flex items-center gap-x-4">
                        <img
                          src='/static/media/getcrazyoffers-logo.7acae2f806d925d6c1f4600a4140520b.svg'
                          alt={post?.author}
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {post?.author}
                          </p>
                          <p className="text-gray-600">Content creator</p>
                        </div>
                      </div>
                      <div className="text-gray-500 text-[0.875em] mt-4 flex gap-2">
                        <div>Apr 6, 2023 9:00 AM {post?.datePosted.toLocaleString()}</div>
                        <div>•</div>
                        <div>5 min read</div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-x-4 md:gap-x-6 justify-center items-center">
                      <SocialMediaShare />
                    </div>
                  </div>
                </header>
              </div>
              {post?.imageUrl && (
                <figure className="mx-auto mt-6 max-w-2xl sm:px-6 px-6 lg:max-w-7xl lg:px-8">
                  <img alt={post?.title} height="485" width="924" src={post?.imageUrl} />
                </figure>
              )}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 px-6 lg:max-w-7xl lg:px-8">
                <ContentArea>
                  {markedContent && (
                    <div
                      className="text-black"
                      dangerouslySetInnerHTML={{ __html: markedContent }}
                    ></div>
                  )}
                </ContentArea>
              </div>
            </article>
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 px-6 lg:max-w-7xl lg:px-8">
              <DiscussionEmbed
                shortname="getcrazyoffers"
                config={{
                  url: window.location.href,
                  identifier: post?.id,
                  title: post?.title,
                  language: 'us_EN',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
