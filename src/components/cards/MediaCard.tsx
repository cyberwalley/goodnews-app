import React from 'react';
import Button from '../elements/Button';

interface MediaCardProps {
  title: string;
  description: string;
  image?: string;
  tag?: string[];
  categories?: string[];
  publishedDate?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  image,
  description,
  tag,
  categories,
  publishedDate,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mx-auto max-w-full bg-white px-8 py-6 border-black border-2 shadow-3xl mb-10">
      <div className="mb-[10px] aspect-w-3 aspect-h-2 overflow-hidden">
        <img
          className="w-full max-h-[300px] object-cover object-center"
          src={image}
          alt={title}
          loading="lazy"
          width="320"
          height="240"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-full p-4">
        <div className="flex flex-wrap gap-2 mb-1 text-green-900 font-bold">
          {categories?.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-black mb-4 text-left">
          {title}
        </h2>
        <p className="text-sm text-black mb-4 text-left">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6 text-gray-600 text-xs">
          {publishedDate}
        </div>
        <Button onClick={() => console.log('read more')}> Read more... </Button>
      </div>
    </div>
  );
};

export default MediaCard;
