import React from 'react';

const Spinner = () => {
  return (
    <div className="h-[10rem] w-[10rem] inline-block rounded-full animate-spin border-[5px] border-white border-b-transparent"></div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
