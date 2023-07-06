import React from 'react'

const BlogSectionPostSquareLineCard = () => {
  return (
    <div className="flex flex-col text-black  md:flex-row pb-[25px] md:pb-[1px] mb-[30px] border-b">
      <div className="post__image w-full md:w-[11rem] h-full md:h-[7rem] relative md:mr-[10px]">
        <img
          src="https://cdn.shopify.com/s/files/1/2233/5129/files/top-laptops_1200x.jpg?v=1682841246"
          alt="title"
          title="title"
          loading="lazy"
          className="w-full object-cover object-center mb-6"
        />
      </div>
      <div className="post__content max-w-md">
        <h3 className="overflow-hidden whitespace-wrap line-clamp-3 text-sm font-bold mb-2">
          How to watch the free Manchester United vs Aston Villa live stream
        </h3>
        <div className="post_info flex flex-wrap gap-1 items-center">
          <span className="post_breadcrumb bg-[#a3e735] rounded-full text-xs py-1 px-2 text-black">Phones</span>
          <span className="post_date"></span>
          <span className="post_author text-xs font-bold">Kemi</span>
          <time className='text-xs' dateTime="2023-04-30T18:05:52-07:00" title="4.30.23 6:05pm">
            18 hours ago
          </time>
        </div>
      </div>
    </div>
  )
}

export default BlogSectionPostSquareLineCard