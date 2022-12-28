import React from 'react';
import {Link} from 'react-router-dom';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <header>
      <ul>
        <li className="text-red-500 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="text-red-500 hover:underline">
          <Link to="/About">About</Link>
        </li>
      </ul>
      {children}
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
