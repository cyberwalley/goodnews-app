import React, { FC } from 'react';
import CampaignCard from '../cards/CampaignCard';
import Grid from '../elements/Grid';
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
        <Grid layout="campaigns">
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
                key={id}
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
        </Grid>
      </div>
    </Section>
  );
};

Campaign.displayName = 'Campaign';

export default Campaign;
