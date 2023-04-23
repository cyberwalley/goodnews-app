import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';
import Layout from '../global/Layout';
import MetaTags from '../global/MetaTags';
import { capitalize } from '../libs/utils';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/elements/Spinner';
import NotFound from './NotFound';
import BlogPostCard from '../components/cards/BlogPostCard';
import Grid from '../components/elements/Grid';
import { SITE_NAME } from '../libs/constants';

const BlogSubCategory = () => {
  const location = useLocation();
  const { handle } = useParams<{ handle: string }>();
  const { getBlogPostsBySubCategory } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug).replace(/-/g, ' ');

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['Blog posts from Sub Category:', capitalizedSlug],
    queryFn: () => getBlogPostsBySubCategory(capitalizedSlug),
  });

  if (!posts || isLoading) {
    return (
      <div className="text-black text-center mx-auto mt-[20vh] mb-0 h-[100vh]">
        <Spinner />
      </div>
    );
  }

  if (posts?.length === 0 || isError) return <NotFound />;
  return (
    <Layout>
      <MetaTags
        title={`${capitalizedSlug} - ${SITE_NAME}`}
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
      <div className="pt-16 p-4 md:p-8">
        <div className="bg-white border-2 shadow-3xl border-black text-black">
          <div className="bg-white py-10 sm:py-10 flex flex-col-reverse md:flex-row">
            <div className="mx-auto max-w-2/3 px-6 lg:px-8">
              <Grid layout="blog">
                {posts &&
                  posts.map(
                    ({
                      id,
                      datePosted,
                      title,
                      category,
                      rootCategory,
                      subCategory,
                      content,
                      imageUrl,
                      slug,
                    }) => (
                      <BlogPostCard
                        key={id}
                        id={id}
                        datePosted={datePosted}
                        title={title}
                        rootCategory={rootCategory}
                        subCategory={subCategory}
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
            <aside className="w-1/3 px-6 lg:px-8 mb-10">
              <div className="ads">
                <iframe
                  src="//ws-na.amazon-adsystem.com/widgets/cm?o=15&p=12&l=ur1&category=amazon_homepage&banner=0KN4RVW6K8W9PXK9RJR2&f=ifr&linkID=a5709db2d68b8d97001cb02168d4a77e&t=gcoffersca-20&tracking_id=gcoffersca-20"
                  width="300"
                  height="250"
                  scrolling="no"
                  marginWidth={0}
                  style={{ border: 'none', margin: 0, padding: 0 }}
                  frameBorder={0}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                ></iframe>
              </div>
              <div className="ads">
                <div className="alignleft">
                  <script type="text/javascript">
                    amzn_assoc_ad_type = "banner"; amzn_assoc_marketplace =
                    "amazon"; amzn_assoc_region = "US"; amzn_assoc_placement =
                    "assoc_banner_placement_default"; amzn_assoc_campaigns =
                    "beauty"; amzn_assoc_banner_type = "category"; amzn_assoc_p
                    = "22"; amzn_assoc_isresponsive = "false";
                    amzn_assoc_banner_id = "04XCSE6T0AFM7MK75482";
                    amzn_assoc_width = "250"; amzn_assoc_height = "250";
                    amzn_assoc_tracking_id = "getcrazyoffers-20";
                    amzn_assoc_linkid = "a187d2028c6337062aa09fd09db32df5";
                  </script>
                  <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogSubCategory;
