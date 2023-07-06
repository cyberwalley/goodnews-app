import React from 'react';
import BlogSectionPostCard from '../../cards/BlogSectionPostCard';
import BlogSectionPostCardVertical from '../../cards/BlogSectionPostCardVertical';
import BlogSectionPostLineCard from '../../cards/BlogSectionPostLineCard';
import BlogSectionPostSquareLineCard from '../../cards/BlogSectionPostSquareLineCard';
import Grid from '../../elements/Grid';
import Section from '../../elements/Section';

const BlogSection = () => {
  return (
    <Section>
      <div className="w-full gap-4 md:gap-8 grid py-6 md:py-8 lg:py-12 border-primary/05 border-2 shadow-3xl border-black bg-white mb-10">
        <Grid layout="blogSection">
          <div className="side-bar text-black bg-[#eefafb] w-auto lg:w-[340px] p-6">
            <BlogSectionPostLineCard />
            <BlogSectionPostLineCard />
            <BlogSectionPostLineCard />
            <BlogSectionPostSquareLineCard />
            <BlogSectionPostSquareLineCard />
          </div>
          <div>
            <BlogSectionPostCardVertical />
            <BlogSectionPostCard />
            <BlogSectionPostCard />
            <BlogSectionPostCard />
            <div className="flex flex-col md:flex-row gap-5">
              <BlogSectionPostCardVertical />
              <BlogSectionPostCardVertical />
            </div>
          </div>
          <div className="side-bar text-black bg-[#eefafb] w-auto lg:w-[340px] p-6">
            <BlogSectionPostLineCard />
            <BlogSectionPostLineCard />
            <BlogSectionPostLineCard />
            <BlogSectionPostSquareLineCard />
            <BlogSectionPostSquareLineCard />
          </div>
        </Grid>
      </div>
    </Section>
  );
};

BlogSection.displayName = 'BlogSection';

export default BlogSection;
