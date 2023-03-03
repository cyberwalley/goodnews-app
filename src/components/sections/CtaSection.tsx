import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div>
      <div className="mx-auto w-full">
        <div className="relative isolate overflow-hidden bg-gray-900 bg-no-repeat bg-auto md:bg-cover bg-center bg-[url('https://m.media-amazon.com/images/G/01/Associates/Marketing/0216_AIPWeekly_ViralTrendsBanner_Email_associates.png')] px-6 pt-16  sm:px-16  lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Going Viral
              <br />
              Start shopping now.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The hosttes product of the moment
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to={'#'}
                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link
                to="#"
                className="text-base font-semibold leading-7 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CtaSection.displayName = 'CtaSection';

export default CtaSection;
