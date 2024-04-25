import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col justify-center items-center font-semibold text-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-screen'>
      {children}
    </div>
  );
};

export default Layout;
