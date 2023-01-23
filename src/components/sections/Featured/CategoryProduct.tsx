import React from 'react';
import { Link } from 'react-router-dom';
import { handleize } from '../../../libs/utils';
import Button from '../../elements/Button';

interface CategoryProductProps {
  id: number;
  productTitle: string;
  price: number;
  label: string;
  seller: string;
  productImage: string;
}

const CategoryProduct: React.FC<CategoryProductProps> = ({
  productTitle,
  price,
  label,
  seller,
  productImage,
}) => {
  return (
    <Link to={`products/${handleize(productTitle)}`}>
      <div className="grid gap-2 snap-start border-black border-[1px] w-72 px-4 py-3 bg-white min-h-[31rem]">
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
          <h3 className="max-w-prose text-[14px] w-full overflow-hidden whitespace-wrap line-clamp-2 text-black">
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
      </div>
    </Link>
  );
};

CategoryProduct.displayName = 'CategoryProduct';

export default CategoryProduct;
