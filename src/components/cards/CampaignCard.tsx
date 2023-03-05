import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CampaignCardProps {
  id: string;
  title?: string;
  date?: string;
  imageSrc?: string;
  href?: string;
  description?: string;
  slug?: string;
  subtitle?: string;
  vendor?: string;
}

const CampaignCard: FC<CampaignCardProps> = ({
  id,
  date,
  title,
  imageSrc,
  href,
  slug,
  subtitle,
  vendor,
}) => {
  return (
    <Link to={`campaigns/${slug}`} state={{ id, slug }}>
      <div key={id} className="group relative border-black border-[1px] mb-10">
        <div className="relative h-80 w-full overflow-hidden bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h3 className="mt-6 text-sm text-gray-500">
            <span className="absolute inset-0" />
            {vendor}
          </h3>
          <p className="text-base font-semibold text-gray-900 mt-2">{title}</p>
          <p className="text-sm text-gray-700 text-[14px] mt-2 overflow-hidden whitespace-wrap line-clamp-2">
            {subtitle}
          </p>
          <p className="mt-6 text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
};

CampaignCard.displayName = 'DealCard';

export default CampaignCard;
