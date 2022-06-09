import React, { ReactNode } from 'react';

const Box: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return (
    <div
      className='rounded-md bg-teal-500 p-4 text-center font-bold text-white shadow-sm'
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
