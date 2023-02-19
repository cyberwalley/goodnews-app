import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SITE_TWITTER_URL } from '../../libs/constants';
import { handleize } from '../../libs/utils';
import Button from '../elements/Button';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  label?: string;
  seller?: string;
  image: string;
  comparedAtPrice?: string;
  discount?: string;
  createdAt?: string;
  sellerName?:string[]
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  label,
  seller,
  image,
  comparedAtPrice,
  discount,
  createdAt,
  sellerName
}) => {
  const formattedTitle = handleize(title);

  return (
    <Link to={`products/${formattedTitle}`} state={{id, title}}>
      {/* <div className="grid gap-2 snap-start border-black border-[1px] w-72 px-4 py-3 bg-white min-h-[32rem]">
        <div className="card-image aspect-[4/5] bg-primary/5">
          {label && (
            <label className="max-w-prose whitespace-pre-wrap text-fine subpixel-antialiased absolute top-0 right-0 m-4 text-right z-10 border-[1px] px-2 py-1 rounded bg-lime-400 text-black ">
              {'20% off'}
            </label>
          )}
          {label && (
            <label className="max-w-prose whitespace-pre-wrap text-fine subpixel-antialiased absolute top-0 left-0 m-4 text-right z-10 border-[1px] px-1 py-1 rounded bg-red-500 text-white ">
              {label}
            </label>
          )}
          <img
            alt={handleize(productTitle)}
            loading="lazy"
            srcSet={productImage}
            className="aspect-[4/5] w-full object-cover fadeIn"
            sizes="320"
            height="400"
            decoding="async"
          />
        </div>
        <div className="grid gap-1">
          <div className="flex gap-4">
            <span className="max-w-prose whitespace-pre-wrap inherit text-[11px] flex gap-4 text-black font-bold">
              <div>From {seller}</div>
            </span>
          </div>
          <h3 className="max-w-prose text-[14px] min-h-[2.5rem] w-full overflow-hidden whitespace-wrap line-clamp-2 text-black">
            {productTitle}
          </h3>
          <div className="flex gap-4">
            <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4 text-black">
              <div>$ {price}</div>
            </span>
          </div>
        </div>
        <Button
          variant="secondary"
          width="full"
          onClick={() => console.log('Get offer')}
        >
          Get offer
        </Button>
      </div> */}
      <div
        key={id}
        className="group relative px-4 py-3 border-black border-[1px]"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none">
          {discount && (
            <label className="max-w-prose whitespace-pre-wrap text-fine subpixel-antialiased absolute top-0 right-0 m-4 text-right z-1 border-[1px] px-2 py-1 rounded bg-lime-400 text-black ">
              {discount}
            </label>
          )}
          {createdAt && (
            <label className="max-w-prose whitespace-pre-wrap text-fine subpixel-antialiased absolute top-0 left-0 m-4 text-right z-1 border-[1px] px-1 py-1 rounded bg-red-500 text-white ">
              {'New'}
            </label>
          )}
          <img
            src={image}
            alt={title}
            className="h-[200px] w-full object-contain object-center lg:w-full aspect-[4/5]"
            sizes="320"
            height="400"
            decoding="async"
          />
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-900 text-[11px] font-bold">
            {sellerName}
          </p>
        </div>
        <div className="mt-2 flex justify-between">
          <h3 className="text-sm text-gray-700 text-[14px] min-h-[2.5rem]  overflow-hidden whitespace-wrap line-clamp-2">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <p className="text-lg font-lg text-red-600">{price}</p>
          <p className="text-sm font-sm text-gray-500 line-through">
            {comparedAtPrice}
          </p>
        </div>
        <div className="mt-2">
          <Button
            variant="secondary"
            width="full"
            onClick={() => console.log('Get offer')}
          >
            Get offer
          </Button>
        </div>
      </div>
    </Link>
  );
};

ProductCard.displayName = 'ProductCard';

export default ProductCard;
