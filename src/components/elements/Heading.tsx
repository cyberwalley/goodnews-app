import React, { FC } from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return <h2 className='text-black px-8 text-3xl text-center capitalize'>{children}</h2>;
};

Heading.displayName = 'Heading';

export default Heading;
