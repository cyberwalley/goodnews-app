import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_TWITTER_URL } from '../libs/constants';
const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Shopify',
    icon: 'https://cdn.shopify.com/shopifycloud/linkpop/assets/facebook-icon.2b3d7f0a.svg',
  },
  {
    name: 'twitter',
    url: 'https://www.facebook.com/Shopify',
    icon: 'https://cdn.shopify.com/shopifycloud/linkpop/assets/twitter-icon.bcc917da.svg',
  },
];

const SocialMediaShare = () => {
  return (
    <>
      {socials.map((social, index) => (
        <Link
          to={SITE_TWITTER_URL}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-3 bg-gray-200 rounded-full"
          key={index}
        >
          <img
            className="h-3 w-3 md:h-auto md:w-auto"
            src={social.icon}
            alt={social.name}
            loading="lazy"
            width="18"
            height="18"
          />
        </Link>
      ))}
    </>
  );
};

SocialMediaShare.displayName = 'SocialMediaShare';

export default SocialMediaShare;
