import React from 'react';
import { Link } from 'react-router-dom';
import { handleize } from '../../../utils/handleize';
import CategoryProduct from './CategoryProduct';

interface FeaturedCategoryProps {
  title: string;
  category: Array<{
    id: number;
    productTitle: string;
    price: number;
    seller: string;
    publishedDate: string;
    label: string;
    categoryTitle: string;
    productImage: string;
  }>;
}

const FeaturedCategory: React.FC<FeaturedCategoryProps> = ({
  title,
  category,
}) => {
  return (
    <section className="p-8">
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
        <div className="swimlane hiddenScroll md:pb-8 md:scroll-px8 lg:scroll-px12 md:px-8 lg:px-12 gap-0">
          {category &&
            category
              //.filter(categoryTitle => categoryTitle === title)
              /*  .map(({ product }) => (
              <CategoryProduct
                key={id}
                productTitle={productTitle}
                price={price}
                seller={seller}
                id={id}
                label={publishedDate === Date() ? 'New' : ''}
              />
            )) */
              .map(
                ({
                  id,
                  productTitle,
                  price,
                  label,
                  seller,
                  publishedDate,
                  productImage,
                }) => (
                  <CategoryProduct
                    key={id}
                    productTitle={productTitle}
                    price={price}
                    seller={seller}
                    id={id}
                    productImage={productImage}
                    label="New"
                  />
                ),
              )}
        </div>
      </div>
    </section>
  );
};

FeaturedCategory.displayName = 'FeaturedCategory';

export default FeaturedCategory;
