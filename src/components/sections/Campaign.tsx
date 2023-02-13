import React, { FC } from 'react';
import CampaignCard from '../cards/CampaignCard';
import Heading from '../elements/Heading';
import Section from '../elements/Section';

interface CampaignProps {
  heading: string;
  campaign: Array<{
    id: string;
    name: string;
    brand: string;
    imageSrc: string;
    href: string;
    date: string;
    description: string;
  }>;
}

const Campaign: FC<CampaignProps> = ({ heading, campaign }) => {
  return (
    <Section>
      <Heading>{heading}</Heading>
      {/* <div className="w-full gap-4 md:gap-8 grid py-6 md:py-8 lg:py-12 border-primary/05 border-2 shadow-3xl border-black bg-white mb-10">
        <div className="px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
            {products.map(({ id, name, brand, date, imageSrc, href }) => (
              <DealCard
                id={id}
                title={name}
                brand={brand}
                date={date}
                imageSrc={imageSrc}
                href={href}
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="w-full gap-4 md:gap-8 grid py-6 md:py-8 lg:py-12 border-primary/05 border-2 shadow-3xl border-black bg-white mb-10">
        <div className="px-8 mt-6 space-y-12 lg:grid lg:grid-cols-3 gap-8 lg:space-y-0">
          {campaign.map(
            ({ id, name, brand, date, imageSrc, href, description }) => (
              <CampaignCard
                id={id}
                title={name}
                brand={brand}
                date={date}
                imageSrc={imageSrc}
                href={href}
                description={description}
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
