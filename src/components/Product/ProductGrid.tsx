import React, { FC } from 'react';
import ProductCard from '../cards/ProductCard';
import Filters from '../elements/Filters';
import Grid from '../elements/Grid';

type productGriptType = { [key: string]: string };
interface ProductGridProps {
  collection: productGriptType[] | undefined;
  loading?: boolean;
  success?: boolean;
}
//@ts-ignore
const ProductGrid: FC<ProductGridProps> = ({
  collection,
  loading,
  success,
}) => {

  if (!collection || loading) return <>Loading...</>;

  return (
    <>
      <div className="bg-white border-2 shadow-3xl border-black">
        <div className="flex justify-center px-8 mt-6">
          <Filters />
        </div>
        <div className="px-8 mx-auto py-6 md:py-8 lg:py-8  ">
          <Grid>
            {collection &&
              collection.map(
                ({
                  id,
                  name,
                  price,
                  vendor,
                  image1,
                  comparedAtPrice,
                  discount,
                  slug,
                }) => (
                  <ProductCard
                    key={id}
                    title={name}
                    price={price}
                    seller={vendor}
                    id={id}
                    image={image1}
                    comparedAtPrice={comparedAtPrice}
                    discount={discount}
                    slug={slug}
                  />
                ),
              )}
          </Grid>
        </div>
      </div>
    </>
  );
};

ProductGrid.displayName = 'ProductGrid';

export default ProductGrid;
