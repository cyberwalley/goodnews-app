import React, { FC } from 'react';
import CampaignCard from '../cards/CampaignCard';
import Heading from '../elements/Heading';
import Section from '../elements/Section';

type CampaignPropsType = { [key: string]: string };
interface CampaignProps {
  heading: string;
  /* campaign: Array<{
    id: string;
    name: string;
    brand: string;
    imageSrc: string;
    href: string;
    date: string;
    description: string;
  }>;  */
  campaign: CampaignPropsType[] | undefined;
  loading: boolean;
}

const Campaign: FC<CampaignProps> = ({ heading, campaign, loading }) => {
  if (!campaign || loading) return <>Loading...</>;
  return (
    <Section>
      <Heading>{heading}</Heading>
      <div className="w-full gap-4 md:gap-8 grid py-6 md:py-8 lg:py-12 border-primary/05 border-2 shadow-3xl border-black bg-white mb-10">
        <div className="px-8 mt-6 space-y-12 lg:grid lg:grid-cols-3 gap-8 lg:space-y-0">
          {campaign?.map(
            ({
              id,
              title,
              subtitle,
              vendor,
              campaignPosterUrl,
              slug,
              referralUrl,
            }) => (
              <CampaignCard
                id={id}
                title={title}
                subtitle={subtitle}
                vendor={vendor}
                imageSrc={campaignPosterUrl}
                href={referralUrl}
                slug={slug}
              />
            ),
          )}
        </div>
      </div>
    </Section>
  );
};

Campaign.displayName = 'Deals';

export default Campaign;
