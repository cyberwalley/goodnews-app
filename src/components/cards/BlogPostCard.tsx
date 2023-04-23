import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatDateTime, handleize } from '../../libs/utils';
import LoadingProduct from '../elements/LoadingProduct';

//type productGriptType = { [key: string]: string };

interface ProductGridProps {
  id: string;
  title: string;
  category: string;
  rootCategory: string;
  subCategory: string;
  datePosted: string;
  content: string;
  imageUrl: string;
  slug: string;
  isLoading?: boolean;
}

const BlogPostCard = ({
  id,
  datePosted,
  title,
  category,
  rootCategory,
  subCategory,
  content,
  imageUrl,
  slug,
  isLoading,
}: ProductGridProps) => {
  const { handle } = useParams<{ handle: string }>();
  if (isLoading) return <LoadingProduct />;
  console.log(handle, 'handle');
  //const [id, datePosted, title, category, content, imageUrl, slug] = post;
  const handleizedCategory = handleize(category);
  const handleizedSubCategory = handleize(subCategory);
  const handleizedRootCategory = handleize(rootCategory);

  return (
    <article key={id} className="flex max-w-xl flex-col justify-between">
      <Link
        to={`/${handleizedRootCategory}/${handleizedCategory}/${handleizedSubCategory}/${slug}`}
        state={{ id, slug }}
        key={id}
      >
        <img
          src={imageUrl}
          alt={title}
          title={title}
          loading="lazy"
          className="w-full object-cover object-center mb-6"
        />
      </Link>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={datePosted} className="text-gray-500">
          {formatDateTime(datePosted)}
        </time>
        {handle === handleizedCategory && (
          <>
            <Link
              to={`/${handleize(rootCategory)}/${handleize(category)}`}
              className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
            >
              {category}
            </Link>
            <Link
              to={`/${handleize(rootCategory)}/${handleize(category)}/${handleize(subCategory)}`}
              className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
            >
              {subCategory}
            </Link>
          </>
        )}

        {handle === handleizedSubCategory && (
          <Link
            to={`/${handleize(rootCategory)}/${handleize(category)}/${handleize(subCategory)}`}
            className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
          >
            {subCategory}
          </Link>
        )}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link
            to={`/${handleizedRootCategory}/${handleizedCategory}/${handleizedSubCategory}/${slug}`}
            state={{ id, slug }}
            key={id}
          >
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
          {content}
        </p>
      </div>
      {/* <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src={post.author.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </a>
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div> */}
    </article>
  );
};

export default BlogPostCard;
