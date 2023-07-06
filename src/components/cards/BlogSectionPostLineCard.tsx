import React from 'react';

const BlogSectionPostLineCard = () => {
  return (
    <div className="flex flex-col text-black pb-[25px] mb-[30px] border-b">
      <div className="post__content">
        <h3 className="overflow-hidden whitespace-wrap line-clamp-2 text-[1rem] font-bold mb-2">
          How to watch the free Manchester United vs Aston Villa live stream
        </h3>
        <div className="post_info flex flex-wrap gap-1 items-center">
          <span className="post_breadcrumb bg-[#00595f] rounded-full text-xs py-1 px-2 text-white">Mobile</span>
          <span className="post_date"></span>
          <span className="post_author font-bold text-xs"> Casey</span>
          <time
            className="text-xs"
            dateTime="2023-04-30T18:05:52-07:00"
            title="4.30.23 6:05pm"
          >
            18 hours ago
          </time>
        </div>
      </div>
    </div>
  );
};

export default BlogSectionPostLineCard;
