import React from 'react'

const BlogSectionPostCardVertical = () => {
  return (
    <div className="flex flex-col text-black pb-[25px] mb-[30px]">
      <div className="post__image w-auto">
        <img
          src="https://cdn.shopify.com/s/files/1/2233/5129/files/top-laptops_1200x.jpg?v=1682841246"
          alt="title"
          title="title"
          loading="lazy"
          className="w-full object-cover object-center mb-6"
        />
      </div>
      <div className="post__content">
        <h3 className="overflow-hidden whitespace-wrap line-clamp-2 text-2xl font-bold">
          How to watch the free Manchester United vs Aston Villa live stream
        </h3>
        <div className="post_except mb-[5px] mt-[15px] text-[14px] text-gray-700">
          Manchester United vs Aston Villa is part of today's Premier League
          soccer lineup. Here's how to watch the game online.{' '}
        </div>
        <div className="post_info">
          <span className="post_breadcrumb"></span>
          <span className="post_date"></span>
          <span className="post_author"></span>
          <time className='text-[13px]' dateTime="2023-04-30T18:05:52-07:00" title="4.30.23 6:05pm">
            18 hours ago
          </time>
        </div>
      </div>
    </div>
  )
}

export default BlogSectionPostCardVertical