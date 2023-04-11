import React from 'react';

interface ContentAreaProps {
  children: React.ReactNode;
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return (
    <div className="text-[4.8vw] md:text-[18px] leading-[1.61111] [&_p]:mb-[1.25em] [&_img]:mt-[0.625em] [&_img]:mb-[2em] [&_ol]:list-auto md:[&_ol]:pl-20 [&_ol]:pl-8 [&_ul]:list-none md:[&_li]:pl-4 [&_li]:mb-[7px] [&_h1]:mb-[0.5em] [&_h1]:text-[2.5em] [&_h1]:font-bold [&_h2]:mb-[0.9375em] [&_h2]:text-[1.77em] [&_h2]:font-semibold [&_strong]:font-semibold [&_a]:text-lime-600 [&_a]:border-lime-600 [&_a]:pb-1 [&_a]:font-bold [&_a]:border-b-2 [&_a]:border-solid [&_h3]:mb-[1.25em] [&_h4]:mb-[1.25em] [&_h5]:mb-[1.25em] [&_h6]:mb-[1.25em] [&_p]:mt-[1.25em] [&_li]:mt-[1.25em] [&_strong]:mt-[1.25em] [&_h1]:mt-[1.25em] [&_h2]:mt-[1.25em] [&_h3]:mt-[1.25em] [&_h4]:mt-[1.25em] [&_h5]:mt-[1.25em] [&_h6]:mt-[1.25em]">
      {children}
    </div>
  );
};

export default ContentArea;
