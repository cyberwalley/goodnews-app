import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className='max-w-[1250px] m-auto'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

Layout.displayName = 'Layout';

export default Layout;
