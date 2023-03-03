import React from 'react';
import { Link } from 'react-router-dom';
import {
  SITE_INSTAGRAM_URL,
  SITE_LOGO,
  SITE_NAME,
  SITE_TWITTER_URL,
} from '../libs/constants';

const Footer = () => {
  return (
    <div className="max-w-[81rem] mx-auto px-4 flex h-96 items-center md:h-36">
      <footer className="flex w-full flex-col justify-between md:flex-row p-4 md:p-8 text-black">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-10 gap-x-10 xl:gap-x-20 md:flex-nowrap">
          <Link to="/">
            <img
              className="h-7 md:h-8 hover:cursor-pointer"
              src={SITE_LOGO}
              alt={SITE_NAME}
              loading="lazy"
            />
          </Link>
          <div className="flex w-full text-sm font-polysans flex-col items-center justify-between gap-y-8 md:ml-auto md:w-auto md:gap-x-10 md:flex-row lg:leading-10">
            <Link to="pages/about" className="hover:cursor-pointer">
              About us
            </Link>
            <Link to="pages/terms" className="hover:cursor-pointer">
              Terms of Service
            </Link>
            <Link to="pages/privacy" className="hover:cursor-pointer">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-row gap-x-4 md:gap-x-6">
            <Link
              to={SITE_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:translate-x-[-5px] hover:translate-y-[5px] shadow-3xl px-3 py-3 bg-white border-black border-2 transition shadow-5px hover:shadow-none"
            >
              <img
                className="h-3 w-3 md:h-auto md:w-auto"
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/instagram-icon.1465ef5e.svg"
                alt="Instagram"
                loading="lazy"
                width="18"
                height="18"
              />
            </Link>
            <Link
              to={SITE_TWITTER_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:translate-x-[-5px] hover:translate-y-[5px] shadow-3xl px-3 py-3 bg-white border-black border-2 transition shadow-5px hover:shadow-none"
            >
              <img
                className="h-3 w-3 md:h-auto md:w-auto"
                src="https://cdn.shopify.com/shopifycloud/linkpop/assets/twitter-icon.bcc917da.svg"
                alt="Twitter"
                loading="lazy"
                width="18"
                height="18"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
