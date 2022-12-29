import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => (
  <button
    className="md:px-4 px-6 py-2 bg-rose-300 transition shadow-5px hover:shadow-none hover:translate-x-[-5px] hover:translate-y-[5px] inline-block whitespace-nowrap border-black border-2 shadow-3xl text-black font-bold"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.displayName = 'Button';

export default Button;
