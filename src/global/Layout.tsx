import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
     {/*  <Header /> */}
      <main>
        <div className='max-w-[1420px] m-auto'>{children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

Layout.displayName = 'Layout';

export default Layout;
