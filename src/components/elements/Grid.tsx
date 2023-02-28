import React, { FC } from 'react';

interface GridProps {
  children: React.ReactNode;
  layout?: string;
}

const Grid: FC<GridProps> = ({ children, layout = 'products' }) => {
  const layouts = {
    products:
      'mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8',
    blog: 'grid-cols-2 pt-24',
  };

  //@ts-ignore
  const styles: string = layouts[layout];

  return <div className={styles}>{children}</div>;
};

Grid.displayName = 'Grid';

export default Grid;
