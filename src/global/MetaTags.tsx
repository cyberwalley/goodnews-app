import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import {
  SITE_NAME,
  SITE_KEYWORDS,
  SITE_TWITTER_ID,
  SITE_TWITTER_URL,
  SITE_FACEBOOK_URL,
  SITE_INSTAGRAM_URL,
  ORG_NAME,
} from '../libs/constants';

interface MetaProps {
  title: string;
  description: string;
  author?: string;
  keywords?: string;
  image?: string;
  pageType?: string;
  schemaVariant?: string;
  brand?: string;
  price?: string;
  validUntil?: string;
  currency?: string;
  canonical?: string;
  ratingValue?: string;
  reviewCount?: string;
}

const MetaTags: FC<MetaProps> = ({
  title,
  description,
  author,
  pageType,
  image,
  schemaVariant = 'Organization',
  brand,
  price,
  validUntil,
  currency,
  canonical,
  ratingValue,
  reviewCount,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SITE_KEYWORDS} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      {/*  <meta
        name="google-site-verification"
        content={GOOGLE_SITE_VERIFICATION}
      /> */}
      {/* social-meta-tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={SITE_TWITTER_ID} />

      {/* Schema */}
      <script type="application/ld+json">
        {schemaVariant === 'product'
          ? JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: title,
              image: [image],
              description: description,
              brand: {
                '@type': 'Brand',
                name: brand,
              },
              review: {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: ratingValue,
                  bestRating: '5',
                },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: ratingValue,
                reviewCount: reviewCount,
              },
              offers: {
                '@type': 'Offer',
                url: window.location.href,
                priceCurrency: currency,
                price: price,
                priceValidUntil: validUntil,
                availability: 'https://schema.org/InStock',
                itemCondition: 'https://schema.org/NewCondition',
              },
            })
          : JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: ORG_NAME,
              alternateName: SITE_NAME,
              url: window.location.href,
              logo: image,
              sameAs: [SITE_TWITTER_URL, SITE_FACEBOOK_URL, SITE_INSTAGRAM_URL],
            })}
      </script>
    </Helmet>
  );
};

MetaTags.displayName = 'Meta';

export default MetaTags;
