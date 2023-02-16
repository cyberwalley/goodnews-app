import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/cards/ProductCard';
import Layout from '../global/Layout';

const Categories = () => {
  const { handle } = useParams<{ handle: string }>();
  /* const products = [
    {
      id: 1,
      categoryTitle: 'Electronics',
      productTitle:
        'Up to 60% ... off Handbags From Coach, Michael Kors and More off Michael Kors and More off Michael Kors and More off',
      price: 100,
      seller: 'Amazon',
      publishedDate: '2021-09-01',
      label: 'New',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 2,
      categoryTitle: 'Electronics',
      productTitle: 'Product 2',
      price: 200,
      seller: 'Konga',
      publishedDate: '2021-09-02',
      label: 'New',
      productImage:
        'https://images-na.ssl-images-amazon.com/images/I/41+rTMSKgqL._AC_SX368_.jpg',
    },
    {
      id: 3,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 4,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 5,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 6,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 7,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 8,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
    {
      id: 9,
      categoryTitle: 'Electronics',
      productTitle: 'Product 3',
      price: 300,
      seller: 'Seller 3',
      publishedDate: '2021-09-03',
      label: '',
      productImage:
        'https://m.media-amazon.com/images/I/61uZ4l7QVJL._AC._SR360,460.jpg',
    },
  ]; */

  const [categories, setCategories] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const products = await res.json();
      console.log(products);
      setCategories(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-3xl pt-20 pb-20 px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-black">
          {handle}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
          Find Exclusive Discounts and Promotions from Top Retailers and Brands
          at Our One-Stop Destination for Savings
        </p>
      </div>
      <div className="pl-4 pr-4 md:pl-8 md:pr-8">
        <div className="bg-white border-2 shadow-3xl border-black">
          <div className="px-8 mx-auto py-6 md:py-8 lg:py-12  ">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
              {categories
              .filter((category) => category === handle)
              .map(
                ({
                  id,
                  title,
                  price,
                  label,
                  seller,
                  publishedDate,
                  image,
                }) => (
                  <ProductCard
                    key={id}
                    title={title}
                    price={price}
                    seller={seller}
                    id={id}
                    image={image}
                    label="New"
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Categories.displayName = 'Categories';

export default Categories;

