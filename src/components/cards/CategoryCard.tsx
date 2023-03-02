import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CategoriesCardProps {
  title: string;
  image: string;
  slug: string;
}

const CategoryCard: FC<CategoriesCardProps> = ({ title, image, slug }) => {
  return (
    <div className="min-w-[33%] h-[420px] min-h-[420px] pl-[10px] pr-[10px] bg-white border-solid border-[1px] border-black">
      <div className="flex flex-col pt-[20px] h-[100%] relative">
        <div className="text-black font-bold text-xl pl-[20px] pr-[20px] mb-[10px]">
          <h2>{title}</h2>
        </div>
        <div className="flex-grow h-[275px] mb-[44px] pl-[20px] pr-[20px]">
          <Link
            to={`/categories/${slug}`}
            className="h-[100%] w-[100%] relative"
          >
            <div className="h-[100%] w-[100%] overflow-hidden relative">
              <img
                className=" w-full object-contain object-center lg:w-full"
                alt="title"
                title="title"
                src={image}
              />
            </div>
          </Link>
        </div>
        <div className="text-black font-bold pl-[20px] pr-[20px] mb-[20px] w-[100%]">
          <Link to={`/categories/${slug}`}>Start shopping</Link>
        </div>
      </div>
    </div>
  );
};

CategoryCard.displayName = 'CategoryCard';

export default CategoryCard;
