import React, { FC } from 'react';
import ProductCard from '../cards/ProductCard';
import Filters from '../elements/Filters';
import Heading from '../elements/Heading';
import Section from '../elements/Section';

interface AllProductsProps {
  heading: string;
  products: Array<{
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

const AllProducts: FC<AllProductsProps> = ({ products, heading }) => {
  return (
    <Section>
      <Heading>{heading}</Heading>
      {/* <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  w-full gap-4 md:gap-8 grid py-6 md:py-8 lg:py-12 border-primary/05 border-2 shadow-3xl border-black bg-white mb-10">
      <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {products.map(
          ({
            id,
            productTitle,
            price,
            label,
            seller,
            publishedDate,
            productImage,
          }) => (
            <ProductCard
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
        
      </div> */}
      <div className="bg-white border-2 shadow-3xl border-black">
        <div className="flex justify-center px-8 mt-6">
          <Filters />
        </div>
        <div className="px-8 mx-auto py-6 md:py-8 lg:py-8  ">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products.map(
              ({
                id,
                productTitle,
                price,
                label,
                seller,
                publishedDate,
                productImage,
              }) => (
                <ProductCard
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
      </div>
    </Section>
  );
};

AllProducts.displayName = 'AllProducts';

export default AllProducts;
