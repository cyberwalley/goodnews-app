import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useContentful from '../api/useContentful';
import Section from '../components/elements/Section';
import ProductGrid from '../components/Product/ProductGrid';
import CtaSection from '../components/sections/CtaSection';
import { capitalize } from '../libs/utils';
import { useQuery } from '@tanstack/react-query';
import Layout from '../global/Layout';

const Campaigns = () => {
  const { handle } = useParams<{ handle: string }>();
  const location = useLocation();
  const { getProductsByCampaign } = useContentful();

  const slug = handle || location.state.slug;
  const capitalizedSlug = capitalize(slug);

  const { data, isLoading } = useQuery({
    queryKey: ['Products by campaign', capitalizedSlug],
    queryFn: () => getProductsByCampaign(capitalizedSlug),
  });

  return (
    <>
      <CtaSection />
      <Layout>
        <Section>
          <ProductGrid collection={data} loading={isLoading} />
        </Section>
      </Layout>
    </>
  );
};

Campaigns.displayName = 'Campaigns';
export default Campaigns;
