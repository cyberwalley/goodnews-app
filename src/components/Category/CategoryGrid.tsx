import React, { FC } from 'react';
import CategoryCard from '../cards/CategoryCard';
import Grid from '../elements/Grid';

type categoryGridType = { [key: string]: string };

interface CategoryGridProps {
  categories: categoryGridType[] | undefined;
  loading: boolean;
}

const CategoryGrid: FC<CategoryGridProps> = ({ categories, loading }) => {
  return (
    <div>
      <Grid layout="category">
        {categories?.map(({ id, title, image, slug }) => (
          <CategoryCard key={id} title={title} image={image} slug={slug} />
        ))}
      </Grid>
    </div>
  );
};

CategoryGrid.displayName = 'CategoryGrid';

export default CategoryGrid;
