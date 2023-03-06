import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';
import Section from '../components/elements/Section';
import ProductGrid from '../components/Product/ProductGrid';
import CtaSection from '../components/sections/CtaSection';
import { capitalize } from '../libs/utils';
import { useQuery } from '@tanstack/react-query';
import Layout from '../global/Layout';
import NotFound from './NotFound';
import MetaTags from '../global/MetaTags';

const Campaigns = () => {
  const { handle } = useParams<{ handle: string }>();
  const location = useLocation();
  const { getProductsByCampaign, getCampaign } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug).replace(/-/g, ' ');

  console.log(capitalizedSlug, 'campaign - capitalizedSlug');

  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ['Products by campaign', capitalizedSlug],
    queryFn: () => getProductsByCampaign(capitalizedSlug),
  });

  const { data: campaign, isLoading: isCampaignsLoading } = useQuery({
    queryKey: ['Campaign', slug],
    queryFn: () => getCampaign(slug),
  });
  console.log(campaign, ' new campaign');

  if (isCampaignsLoading) return <div className="text-black">loading</div>;

  if (!products || products?.length === 0) return <NotFound />;

  return (
    <>
    <MetaTags
        title={`${ campaign?.[0]?.title} - Getdailyoffers.com`}
        description={campaign?.[0]?.subtitle}
        canonical={`/campaigns/${slug}`}
      />
      <CtaSection campaign={campaign} loading={isCampaignsLoading} />
      <Layout>
        <Section>
          <ProductGrid collection={products} loading={isProductsLoading} />
        </Section>
      </Layout>
    </>
  );
};

Campaigns.displayName = 'Campaigns';
export default Campaigns;
