import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../elements/Button';

const SignUp = () => {
  return (
    <div className=" relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <path
          id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
          fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
          fillOpacity=".3"
          d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
        />
        <defs>
          <linearGradient
            id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
            x1="614.778"
            x2="-42.453"
            y1="26.617"
            y2="96.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
      </svg>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full px-3">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              Sign up for our newsletter
            </h2>

            <form className="mt-8 sm:flex">
              <input
                aria-label="Email address"
                type="email"
                required
                className="appearance-none w-full px-5 py-3 text-base leading-6 text-gray-700 bg-white border border-black shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue transition duration-150 ease-in-out"
                placeholder="Enter your email for daily deals and offers"
              />

              <Button
                type="submit"
                variant="secondary"
                width="full"
                onClick={() => console.log('submit')}
              >
                Sign up
              </Button>
            </form>
            <p className="mt-3 text-lg leading-6 text-gray-500 text-center">
              Will be used in accordance with our
              <Link to={'/pages/privacy'}> Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
