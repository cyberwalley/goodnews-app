import React from 'react';
import { Link } from 'react-router-dom';
const Hero = (): JSX.Element => {
  return (
    <div className="isolate mb-10">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-20">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
                Discover the Best Daily Deals and Offers here
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Find Exclusive Discounts and Promotions from Top Retailers and
                Brands at Our One-Stop Destination for Savings
              </p>
            </div>

            <div className="mt-10 flex gap-x-4 sm:justify-center">
              <Link
                className="md:px-4 px-6 py-2 bg-rose-300 transition shadow-5px hover:shadow-none hover:translate-x-[-5px] hover:translate-y-[5px] inline-block whitespace-nowrap border-black border-2 shadow-3xl text-black font-bold"
                to={'pages/about'}
              >
                About us
              </Link>
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-10">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="text-gray-600">
                  When you buy through links on our site, we may earn an
                  affilate commission.
                </span>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.displayName = 'Hero';

export default Hero;
