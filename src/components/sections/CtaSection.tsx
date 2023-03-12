import React, { FC } from 'react';
import Spinner from '../elements/Spinner';

interface CtaSectionProps {
  campaign: string[] | undefined;
  loading: boolean;
}

const CtaSection: FC<CtaSectionProps> = ({ campaign, loading }) => {
  if (loading) return <Spinner />;

  return (
    <div className="relative bg-gray-800">
      <img
        className="w-full h-40 sm:h-56 md:h-64 lg:h-80 object-cover opacity-50"
        /* @ts-ignore */
        src={campaign?.[0]?.campaignPosterUrl}
        /* @ts-ignore */
        alt={campaign?.[0]?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center px-4 sm:px-8 lg:px-16 xl:px-32">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            {/* @ts-ignore */}
            {campaign?.[0]?.title}
          </h1>
          <h2 className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
            {/* @ts-ignore */}
            {campaign?.[0]?.subtitle}
          </h2>
          <a
            /* @ts-ignore */
            href={campaign?.[0].referralUrl}
            className="md:px-4 px-6 py-2 bg-rose-300 transition shadow-5px hover:shadow-none hover:translate-x-[-5px] hover:translate-y-[5px] inline-block whitespace-nowrap border-black border-2 shadow-3xl text-black font-bold"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

CtaSection.displayName = 'CtaSection';

export default CtaSection;
