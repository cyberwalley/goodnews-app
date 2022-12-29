import React from 'react';
import {Link, NavLink} from 'react-router-dom';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}) => {
  const isActiveLink = (isActive: boolean) =>
    isActive ? 'text-blue-500 text-decoration-line: underline' : 'text-red-500';

  const MenuItems = [
    {
      id: 1,
      title: 'Home',
      to: '/',
      target: '_self',
    },
    {
      id: 2,
      title: 'About',
      to: '/About',
      target: '_self',
    },
  ];

  return (
    <header className="sticky top-0 z-20 border-b-2 border-black bg-white">
      <div className="max-w-[81rem] mx-auto px-4 flex items-center gap-12 h-24">
        <h1 className="text-4xl">
          <Link to="/" className="font-bold text-black">
            Good News app
          </Link>
        </h1>
        <nav className="flex gap-10">
          {MenuItems.map(item => (
            <NavLink
              className={({isActive}) => isActiveLink(isActive)}
              key={item.id}
              to={item.to}
              target={item.target}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        {children}
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
