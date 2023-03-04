import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';
import Section from '../components/elements/Section';
import Layout from '../global/Layout';
import { capitalize } from '../libs/utils';
import { useQuery } from '@tanstack/react-query';
import NotFound from './NotFound';
import { marked } from 'marked';

const Pages = () => {
  const { handle } = useParams<{ handle: string }>();
  const location = useLocation();
  const { getPage } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug);

  type productGriptType = { [key: string]: string };

  const { data, isLoading } = useQuery<productGriptType[] | undefined>({
    queryKey: ['Pages', slug],
    queryFn: () => getPage(slug),
  });

  if (data?.length === 0) return <NotFound />;

  if (isLoading) return <div className="text-black">loading</div>;

  /* @ts-ignore */
  const markedContent = marked.parse(data?.[0].content);

  return (
    <Layout>
      <header>
        <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            {capitalizedSlug}
          </h1>
        </div>
      </header>
      <Section>
        <div className="bg-white border-2 shadow-3xl border-black text-black">
          <div
            className="py-[4rem] px-[2rem]"
            dangerouslySetInnerHTML={{ __html: markedContent }}
          />
        </div>
      </Section>
    </Layout>
  );
};

Pages.displayName = 'Pages';

export default Pages;
