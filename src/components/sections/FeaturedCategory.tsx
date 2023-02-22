import React, { FC } from 'react';
import { getProducts } from '../../api/products';
import ProductCard from '../cards/ProductCard';
import Filters from '../elements/Filters';
import Heading from '../elements/Heading';
import Section from '../elements/Section';
import ProductGrid from '../Product/ProductGrid';

type productGriptType = { [key: string]: string };
interface FeaturedCategoryProps {
  heading: string;
  /*  products: Array<{
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
  }>;  */
  products: productGriptType[] | undefined;
  loading: boolean;
}

//@ts-ignore
const FeaturedCategory:FC<FeaturedCategoryProps> = ({
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
