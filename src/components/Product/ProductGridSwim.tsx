import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { handleize } from '../../libs/utils';
import ProductCard from '../cards/ProductCard';

interface ProductGridSwimProps {
  collection: Array<{
    id: string;
    title: string;
    price: string;
    seller: string;
    published: boolean;
    categoryTitle: string;
    image1: string;
    comparedAtPrice: string;
    discount: string;
    createdAt?: string;
    sellerName?: string[];
  }>;
}

const ProductGridSwim: FC<ProductGridSwimProps> = ({ collection }) => {
  if (!collection) return <>no products</>;
  const { title } = collection[0];

  return (
    <div className="w-full gap-4 md:gap-8 grid py-6 md:py-8 lg:py-12 border-primary/05 border-2 shadow-3xl border-black bg-white mb-10">
      <div className="flex gap-2 justify-between">
        <Link to={`/categories/${handleize(title)}`}>
          <div className="flex gap-2">
            <h2 className="whitespace-pre-wrap max-w-prose text-lead pl-6 text-black font-bold">
              {title}
            </h2>
            <p className="text-black">(view all)</p>
          </div>
        </Link>
        <div className="text-black pr-6" aria-hidden="true">
          &larr; &rarr;
        </div>
      </div>
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px8 lg:scroll-px12 md:px-8 lg:px-12 gap-4">
        {collection &&
          collection
            .filter(collection => collection.published === true)
            .map(
              ({
                id,
                title,
                price,
                seller,
                image1,
                comparedAtPrice,
                sellerName,
                discount,
                createdAt,
              }) => (
                <div className="grid gap-2 snap-start w-72  bg-white min-h-[32rem]">
                  <ProductCard
                    key={id}
                    title={title}
                    price={price}
                    seller={seller}
                    id={id}
                    image={image1}
                    comparedAtPrice={comparedAtPrice}
                    discount={discount}
                    createdAt={createdAt}
                    sellerName={sellerName}
                  />
                </div>
              ),
            )}
      </div>
    </div>
  );
};

ProductGridSwim.displayName = 'ProductGridSwim';

export default ProductGridSwim;
