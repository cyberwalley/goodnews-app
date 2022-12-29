import React from 'react';
import Button from '../elements/Button';
import Tag from '../elements/Tag';

interface MediaCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  image,
  description,
  tags,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mx-auto max-w-full bg-white px-8 py-6 border-black border-2 shadow-3xl mb-10">
      <img
        className="w-full mb-[20px]"
        srcSet={image}
        alt={title}
        loading="lazy"
      />
      <div className="flex flex-col justify-center w-full h-full p-4">
        <h2 className="text-2xl font-bold text-black mb-4 text-left">
          {title}
        </h2>
        <p className="text-sm text-black mb-6 text-left">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags?.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <Button onClick={() => console.log('read more')}> Read more... </Button>
      </div>
    </div>
  );
};

export default MediaCard;
