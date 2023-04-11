import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_TWITTER_ID, SITE_TWITTER_URL } from '../libs/constants';
import FacebookIcon from '../assets/images/facebook.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import LinkedinIcon from '../assets/images/linkedin.svg';
import Pinterest from '../assets/images/pinterest.svg';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
// share button by react-share https://github.com/nygardk/react-share#readme

interface SocialMediaShareProps {
  url: string;
  quote?: string;
  title: string | undefined;
  description?: string;
  summary?: string;
  hashtags?: string;
  source?: string;
  imageUrl?: string;
  image?: string;
  media?: string;
  tags?: string[];
  related?: string;
  via?: string;
  separator?: string;
}

const SocialMediaShare = ({ url, title }: SocialMediaShareProps) => {
  return (
    <>
      {/* {socials.map((social, index) => (
        <Link
          to={SITE_TWITTER_URL}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-3 bg-gray-200 rounded-full"
          key={index}
        >
          <img
            className="h-4 w-4 md:w-auto"
            src={social.icon}
            alt={social.name}
            loading="lazy"
            title={social.name}
            width="20"
            height="20"
          />
        </Link>
      ))} */}
      <FacebookShareButton
        url={url}
        children={
          <div className="px-3 py-3 bg-gray-200 rounded-full">
            <img
              src={FacebookIcon}
              alt="facebook"
              title="Share on Facebook"
              className="h-4 w-4 md:w-auto"
            />
          </div>
        }
        quote="hey"
      />
      <LinkedinShareButton
        url={url}
        children={
          <div className="px-3 py-3 bg-gray-200 rounded-full">
            <img
              src={LinkedinIcon}
              alt="Linkedin"
              title="Share on Linkedin"
              className="h-4 w-4 md:w-auto"
            />
          </div>
        }
      />
      <TwitterShareButton
        url={url}
        title={title}
        via={SITE_TWITTER_ID}
        children={
          <div className="px-3 py-3 bg-gray-200 rounded-full">
            <img
              src={TwitterIcon}
              alt="Twitter"
              title="Share on Twitter"
              className="h-4 w-4 md:w-auto"
            />
          </div>
        }
      />
    </>
  );
};

SocialMediaShare.displayName = 'SocialMediaShare';

export default SocialMediaShare;
