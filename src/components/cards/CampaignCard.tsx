import React, { FC } from 'react';

interface CampaignCardProps {
  id: string;
  title: string;
  brand: string;
  date: string;
  imageSrc: string;
  href: string;
  description: string;
}

const CampaignCard: FC<CampaignCardProps> = ({
  id,
  brand,
  date,
  imageSrc,
  href,
  description,
}) => {
  return (
    <div key={id} className="group relative border-black border-[1px]">
      <div className="relative h-80 w-full overflow-hidden bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={imageSrc}
          alt={description}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className='p-4'>
        <h3 className="mt-6 text-sm text-gray-500">
          <a href={href}>
            <span className="absolute inset-0" />
            {brand}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">{description}</p>
        <p className="mt-6 text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

CampaignCard.displayName = 'DealCard';

export default CampaignCard;
