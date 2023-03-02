import React, { FC } from 'react';
import Heading from '../elements/Heading';
import Section from '../elements/Section';
import ProductGrid from '../Product/ProductGrid';

type productGriptType = { [key: string]: string };
interface FeaturedCategoryProps {
  heading: string;
  products: productGriptType[] | undefined;
  loading: boolean;
}

//@ts-ignore
const FeaturedCategory: FC<FeaturedCategoryProps> = ({
  products,
  heading,
  loading,
}) => {
  console.log(products, 'products - feature-category');
  return (
    <Section>
      <Heading>{heading}</Heading>
      <ProductGrid collection={products} loading={loading} />
    </Section>
  );
};

FeaturedCategory.displayName = 'FeaturedCategory';

export default FeaturedCategory;
