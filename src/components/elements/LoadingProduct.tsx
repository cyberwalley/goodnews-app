import React from 'react';
import Border from './Border';
import Grid from './Grid';
import Section from './Section';

const LoadingProduct = () => {
  return (
    <Section>
      <Border>
        <div className="px-8 mx-auto py-6 md:py-8 lg:py-8">
          <Grid>
            <div className="group relative px-4 py-3 border-black border-[1px] animate-pulse">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none">
                <div className="bg-slate-100 h-[164px] w-[100%]"></div>
              </div>
              <div className="mt-2 flex justify-between w-[100%] bg-slate-100 h-5 "></div>
              <div className="mt-2 flex items-center gap-2 w-[100%] bg-slate-100 h-2"></div>
              <div className="mt-2 h-[40px] w-[100%] bg-slate-100 "></div>
            </div>
            <div className="group relative px-4 py-3 border-black border-[1px] animate-pulse">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none">
                <div className="bg-slate-100 h-[164px] w-[100%]"></div>
              </div>
              <div className="mt-2 flex justify-between w-[100%] bg-slate-100 h-5 "></div>
              <div className="mt-2 flex items-center gap-2 w-[100%] bg-slate-100 h-2"></div>
              <div className="mt-2 h-[40px] w-[100%] bg-slate-100 "></div>
            </div>
            <div className="group relative px-4 py-3 border-black border-[1px] animate-pulse">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none">
                <div className="bg-slate-100 h-[164px] w-[100%]"></div>
              </div>
              <div className="mt-2 flex justify-between w-[100%] bg-slate-100 h-5 "></div>
              <div className="mt-2 flex items-center gap-2 w-[100%] bg-slate-100 h-2"></div>
              <div className="mt-2 h-[40px] w-[100%] bg-slate-100 "></div>
            </div>
            <div className="group relative px-4 py-3 border-black border-[1px] animate-pulse">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none">
                <div className="bg-slate-100 h-[164px] w-[100%]"></div>
              </div>
              <div className="mt-2 flex justify-between w-[100%] bg-slate-100 h-5 "></div>
              <div className="mt-2 flex items-center gap-2 w-[100%] bg-slate-100 h-2"></div>
              <div className="mt-2 h-[40px] w-[100%] bg-slate-100 "></div>
            </div>
            <div className="group relative px-4 py-3 border-black border-[1px] animate-pulse">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white group-hover:opacity-75 lg:aspect-none">
                <div className="bg-slate-100 h-[164px] w-[100%]"></div>
              </div>
              <div className="mt-2 flex justify-between w-[100%] bg-slate-100 h-5 "></div>
              <div className="mt-2 flex items-center gap-2 w-[100%] bg-slate-100 h-2"></div>
              <div className="mt-2 h-[40px] w-[100%] bg-slate-100 "></div>
            </div>
          </Grid>
        </div>
      </Border>
    </Section>
  );
};

LoadingProduct.displayName = 'LoadingProduct';

export default LoadingProduct;
