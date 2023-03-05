import React, { FC } from 'react';
interface BorderProps {
  children: React.ReactNode;
}

const Border: FC<BorderProps> = ({ children }) => {
  return (
    <div className="bg-white border-black border-2 shadow-3xl mt-10">
      {children}
    </div>
  );
};

Border.displayName = 'Border';

export default Border;
