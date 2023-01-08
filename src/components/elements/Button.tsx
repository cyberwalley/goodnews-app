import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  width?: 'auto' | 'full';
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  width = 'auto',
  onClick,
}) => {
  const baseButtonClasses =
    'text-center md:px-4 px-6 py-2 bg-rose-300 transition shadow-5px hover:shadow-none  inline-block whitespace-nowrap border-black text-black border-2 font-bold';
  const widthClasses = {
    auto: 'w-auto',
    full: 'w-full',
  };
  const variants = {
    primary: `${baseButtonClasses} hover:translate-x-[-5px] hover:translate-y-[5px] shadow-3xl`,
    secondary: `${baseButtonClasses} hover:bg-rose-400 transition`,
  };

  return (
    <button
      className={`${variants[variant]} ${widthClasses[width]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
