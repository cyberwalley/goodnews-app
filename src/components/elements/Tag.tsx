import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({children}) => {
  return (
    <span className="text-sm text-black bg-gray-300 px-2 py-1 rounded-md">
      {children}
    </span>
  );
};

Tag.displayName = 'Tag';

export default Tag;
