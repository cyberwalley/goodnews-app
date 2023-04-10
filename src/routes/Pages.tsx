import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';
import Section from '../components/elements/Section';
import Layout from '../global/Layout';
import { capitalize } from '../libs/utils';
import { useQuery } from '@tanstack/react-query';
import NotFound from './NotFound';
import { marked } from 'marked';
import MetaTags from '../global/MetaTags';
import Spinner from '../components/elements/Spinner';
import ContentArea from '../global/ContentArea';

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

  if (isLoading) return <Spinner />;

  /* @ts-ignore */
  const markedContent = marked.parse(data?.[0].content);

  return (
    <Layout>
      <MetaTags
        title={capitalizedSlug}
        description={markedContent}
        canonical={`pages/${slug}`}
      />
      <header>
        <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
            {capitalizedSlug}
          </h1>
        </div>
      </header>
      <Section>
        <div className="bg-white border-2 shadow-3xl border-black text-black py-[4rem] px-[2rem]">
          <ContentArea>
            <div dangerouslySetInnerHTML={{ __html: markedContent }}></div>
          </ContentArea>
        </div>
        <script type="text/javascript">
          amzn_assoc_placement = "adunit0"; amzn_assoc_tracking_id =
          "getcrazyoffers-20"; amzn_assoc_ad_mode = "manual"; amzn_assoc_ad_type
          = "smart"; amzn_assoc_marketplace = "amazon"; amzn_assoc_region =
          "US"; amzn_assoc_title = "My Amazon Picks"; amzn_assoc_linkid =
          "f9b06df4506d405fddfd2315f58f1d73"; amzn_assoc_search_bar = "true";
          amzn_assoc_asins = "B07P1YSC18,B019DHBCXE,B01FCDWZFC,B0B688LFJP";
        </script>
        <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
      </Section>
    </Layout>
  );
};

Pages.displayName = 'Pages';

export default Pages;
